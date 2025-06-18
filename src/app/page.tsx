'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CpuChipIcon, BeakerIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-offstar-300 to-quantum-400 bg-clip-text text-transparent">
                OFFSTAR Enterprise
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
                AI-Powered Development Platform with Io.net, OBL.dev, and Quantum Intelligence
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>🧠 AI-First Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>⚡ Io.net Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>🔮 Quantum Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>📱 Mobile Integration</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-offstar-600 to-quantum-600 hover:from-offstar-500 hover:to-quantum-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <span>Launch Dashboard</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              
              <Link
                href="https://github.com/protechtimenow/offstar-enterprise-ai-platform"
                className="inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <span>View on GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Next-Generation AI Development
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Revolutionizing how enterprise applications are built with AI-first approach
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI-Powered Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="offstar-card p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-offstar-500 to-offstar-600 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Code Generation</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Intelligent code generation with Replit AI. Create components, APIs, and entire features with natural language commands.
              </p>
            </motion.div>
            
            {/* Io.net Processing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ionet-card p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ionet-500 to-ionet-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Distributed Computing</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leverage Io.net's distributed GPU network for heavy computations, AI model training, and real-time data processing.
              </p>
            </motion.div>
            
            {/* Quantum Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="quantum-border p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-quantum-500 to-quantum-600 rounded-lg flex items-center justify-center">
                  <BeakerIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Quantum Intelligence</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Advanced consciousness analytics and spiritual metrics for quantum-enhanced decision making and reality manifestation.
              </p>
            </motion.div>
            
            {/* Mobile Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-transparent p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Mobile Command</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Control your entire development ecosystem from your mobile device. Real-time monitoring and command execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* System Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              System Status: FULLY OPERATIONAL
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Mobile Device</h4>
                <p className="text-sm text-gray-400">phone-1750269655-5440</p>
                <p className="text-sm text-green-400">Connected</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Io.net Network</h4>
                <p className="text-sm text-gray-400">3 Active Workers</p>
                <p className="text-sm text-blue-400">27.7 TH/s</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">AI Systems</h4>
                <p className="text-sm text-gray-400">Quantum Enhanced</p>
                <p className="text-sm text-purple-400">Active</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}