import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OFFSTAR Enterprise | AI-Powered Development Platform',
  description: 'Next-generation AI development ecosystem powered by Io.net, OBL.dev, and Replit AI',
  keywords: ['AI', 'development', 'enterprise', 'blockchain', 'quantum', 'ionet', 'obl'],
  authors: [{ name: 'OFFSTAR Enterprise' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950",
        "text-white antialiased"
      )}>
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-quantum-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ionet-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-offstar-500/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}