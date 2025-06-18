'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  BeakerIcon, 
  DevicePhoneMobileIcon,
  BoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const dashboardCards = [
  {
    title: 'AI Command Center',
    description: 'Intelligent code generation and automation',
    href: '/dashboard/ai',
    icon: CpuChipIcon,
    color: 'from-offstar-500 to-offstar-600',
    bgColor: 'offstar-500/10',
    borderColor: 'border-offstar-500/30'
  },
  {
    title: 'Network Monitor',
    description: 'Io.net distributed computing status',
    href: '/dashboard/network',
    icon: BoltIcon,
    color: 'from-ionet-500 to-ionet-600',
    bgColor: 'ionet-500/10',
    borderColor: 'border-ionet-500/30'
  },
  {
    title: 'Quantum Analytics',
    description: 'Consciousness and spiritual metrics',
    href: '/dashboard/quantum',
    icon: BeakerIcon,
    color: 'from-quantum-500 to-quantum-600',
    bgColor: 'quantum-500/10',
    borderColor: 'border-quantum-500/30'
  },
  {
    title: 'Blockchain Hub',
    description: 'Smart contract analysis and security',
    href: '/dashboard/blockchain',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-purple-600',
    bgColor: 'blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'Mobile Command',
    description: 'Device management and remote control',
    href: '/dashboard/mobile',
    icon: DevicePhoneMobileIcon,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'emerald-500/10',
    borderColor: 'border-emerald-500/30'
  },
  {
    title: 'System Overview',
    description: 'Real-time monitoring and health status',
    href: '/dashboard/overview',
    icon: EyeIcon,
    color: 'from-gray-500 to-gray-600',
    bgColor: 'gray-500/10',
    borderColor: 'border-gray-500/30'
  }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            OFFSTAR Enterprise Dashboard
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            AI-Powered Development Command Center
          </p>
          
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">System: Operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Io.net: 3 Workers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">AI: Enhanced</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                Device ID: phone-1750269655-5440
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={card.href}>
                  <div className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border ${card.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}>
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                      
                      {/* Interactive Elements */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${card.color} animate-pulse`} style={{width: '75%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>AI Ready</span>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
        
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-r from-offstar-600 to-offstar-700 hover:from-offstar-500 hover:to-offstar-600 text-white p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              🤖 Generate AI Component
            </button>
            <button className="bg-gradient-to-r from-ionet-600 to-ionet-700 hover:from-ionet-500 hover:to-ionet-600 text-white p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              ⚡ Process with Io.net
            </button>
            <button className="bg-gradient-to-r from-quantum-600 to-quantum-700 hover:from-quantum-500 hover:to-quantum-600 text-white p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              🔮 Analyze Quantum Metrics
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}