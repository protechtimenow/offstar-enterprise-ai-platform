/**
 * OFFSTAR Endpoint Guardian - Multi-Scale Security Middleware
 * Implements Micro → Mezo → Macro security patterns
 */

const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const crypto = require('crypto');

class EndpointGuardian {
  
  // 🔬 MICRO LEVEL - Individual endpoint security
  static microSecurity() {
    return {
      
      // JWT Authentication with rotation
      authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        
        if (!token) {
          return res.status(401).json({ 
            error: 'Access denied - No token provided',
            code: 'NO_TOKEN',
            timestamp: new Date().toISOString()
          });
        }
        
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded;
          
          // Add request fingerprint for tracking
          req.fingerprint = crypto
            .createHash('sha256')
            .update(req.ip + req.headers['user-agent'])
            .digest('hex');
            
          next();
        } catch (error) {
          return res.status(403).json({ 
            error: 'Invalid token',
            code: 'INVALID_TOKEN',
            timestamp: new Date().toISOString()
          });
        }
      },
      
      // Wallet signature verification
      verifyWalletSignature: (req, res, next) => {
        const { signature, message, address } = req.body;
        
        if (address !== process.env.AUTHORIZED_WALLET) {
          return res.status(403).json({
            error: 'Unauthorized wallet address',
            code: 'UNAUTHORIZED_WALLET'
          });
        }
        
        // Verify signature matches expected wallet
        // Implementation would use ethers.js or web3.js
        next();
      },
      
      // Input validation and sanitization
      validateInput: (schema) => {
        return (req, res, next) => {
          const { error } = schema.validate(req.body);
          if (error) {
            return res.status(400).json({
              error: 'Invalid input data',
              details: error.details,
              code: 'VALIDATION_ERROR'
            });
          }
          next();
        };
      }
    };
  }
  
  // 🏗️ MEZO LEVEL - Service mesh security
  static mezoSecurity() {
    return {
      
      // Adaptive rate limiting based on user behavior
      adaptiveRateLimit: rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: (req) => {
          // VIP users get higher limits
          if (req.user?.tier === 'enterprise') return 1000;
          if (req.user?.tier === 'premium') return 500;
          return 100; // Standard limit
        },
        message: {
          error: 'Too many requests',
          code: 'RATE_LIMIT_EXCEEDED',
          retryAfter: '15 minutes'
        },
        standardHeaders: true,
        legacyHeaders: false,
      }),
      
      // Service-to-service authentication
      serviceAuth: (req, res, next) => {
        const serviceToken = req.headers['x-service-token'];
        const serviceName = req.headers['x-service-name'];
        
        if (!serviceToken || !serviceName) {
          return res.status(401).json({
            error: 'Service authentication required',
            code: 'NO_SERVICE_AUTH'
          });
        }
        
        // Verify service token in service registry
        if (!this.verifyServiceToken(serviceToken, serviceName)) {
          return res.status(403).json({
            error: 'Invalid service credentials',
            code: 'INVALID_SERVICE_AUTH'
          });
        }
        
        next();
      },
      
      // Circuit breaker for external services
      circuitBreaker: (serviceName, options = {}) => {
        const failures = new Map();
        const threshold = options.threshold || 5;
        const resetTime = options.resetTime || 60000;
        
        return (req, res, next) => {
          const failureCount = failures.get(serviceName) || 0;
          
          if (failureCount >= threshold) {
            return res.status(503).json({
              error: 'Service temporarily unavailable',
              code: 'CIRCUIT_BREAKER_OPEN',
              service: serviceName
            });
          }
          
          next();
        };
      }
    };
  }
  
  // 🌍 MACRO LEVEL - Infrastructure security
  static macroSecurity() {
    return {
      
      // Security headers
      securityHeaders: helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://api.offstar.io"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
          },
        },
        crossOriginEmbedderPolicy: false
      }),
      
      // DDoS protection
      ddosProtection: (req, res, next) => {
        const now = Date.now();
        const windowSize = 60000; // 1 minute
        const threshold = 1000; // requests per minute
        
        // Implementation would use Redis for distributed rate limiting
        next();
      },
      
      // Global error handler with security logging
      errorHandler: (err, req, res, next) => {
        // Log security events for SIEM
        console.error('Security Event:', {
          timestamp: new Date().toISOString(),
          ip: req.ip,
          userAgent: req.headers['user-agent'],
          endpoint: req.originalUrl,
          error: err.message,
          stack: err.stack,
          user: req.user?.id || 'anonymous'
        });
        
        // Don't leak internal errors
        const statusCode = err.statusCode || 500;
        const message = statusCode === 500 ? 'Internal server error' : err.message;
        
        res.status(statusCode).json({
          error: message,
          code: err.code || 'INTERNAL_ERROR',
          timestamp: new Date().toISOString(),
          requestId: req.requestId
        });
      }
    };
  }
  
  // 🔄 SHORTCUTS → LONGCUTS Implementation
  static securityPipeline() {
    return {
      
      // Quick deployment shortcuts
      quickSecure: [
        this.macroSecurity().securityHeaders,
        this.mezoSecurity().adaptiveRateLimit,
        this.microSecurity().authenticateToken
      ],
      
      // Comprehensive security longcuts
      fullSecure: [
        this.macroSecurity().securityHeaders,
        this.macroSecurity().ddosProtection,
        this.mezoSecurity().adaptiveRateLimit,
        this.mezoSecurity().serviceAuth,
        this.microSecurity().authenticateToken,
        this.microSecurity().verifyWalletSignature,
        this.requestLogger,
        this.threatDetection
      ]
    };
  }
  
  // Utility methods
  static verifyServiceToken(token, serviceName) {
    // Implementation for service registry verification
    return true; // Placeholder
  }
  
  static requestLogger(req, res, next) {
    req.requestId = crypto.randomUUID();
    console.log(`[${req.requestId}] ${req.method} ${req.originalUrl} from ${req.ip}`);
    next();
  }
  
  static threatDetection(req, res, next) {
    // AI-powered threat detection placeholder
    // Would integrate with your OFFSTAR AI platform
    next();
  }
}

module.exports = EndpointGuardian;