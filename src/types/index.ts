// OFFSTAR Enterprise Type Definitions

export interface SystemHealth {
  status: 'healthy' | 'warning' | 'error'
  uptime: number
  memory_usage: {
    rss: number
    heapTotal: number
    heapUsed: number
    external: number
    arrayBuffers: number
  }
  environment: string
  mobile_api_active: boolean
  timestamp: string
}

export interface NetworkMetrics {
  status: string
  active_workers: number
  total_workers: number
  total_compute_power: number
  network_health: string
  workers: WorkerNode[]
}

export interface WorkerNode {
  id: string
  type: 'GPU' | 'CPU' | 'Quantum-Hybrid'
  status: 'active' | 'idle' | 'offline'
  performance_score: number
  current_task?: string
}

export interface QuantumMetrics {
  quantum_metrics: {
    spiritual: {
      resonanceLevel: number
      energyLevel: number
      consciousness: string
    }
  }
}

export interface AICommand {
  command: string
  priority: 'low' | 'medium' | 'high'
  context: string
  response?: string
  timestamp?: string
  ai_powered?: boolean
}

export interface BlockchainAnalysis {
  contract_address: string
  network: string
  analysis_type: string
  task_id?: string
  analysis_id?: string
  result?: {
    security_score: number
    vulnerabilities: string[]
    gas_optimization: string[]
    recommendations: string[]
  }
}

export interface EnterpriseAccount {
  id: string
  name: string
  type: 'enterprise' | 'premium' | 'basic'
  status: 'active' | 'suspended' | 'pending'
  features: string[]
  usage: {
    api_calls: number
    compute_hours: number
    storage_gb: number
  }
}

export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
  ai_powered?: boolean
  ionet_processed?: boolean
}

export interface MobileDevice {
  id: string
  name: string
  type: string
  status: 'connected' | 'disconnected'
  last_seen: string
  api_key: string
  permissions: string[]
}

export interface IoNetTask {
  task_id: string
  task_type: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  input_data: any
  output_data?: any
  worker_node?: string
  processing_time?: number
  created_at: string
  completed_at?: string
}

// UI Component Types
export interface DashboardCard {
  title: string
  value: string | number
  change?: {
    value: number
    trend: 'up' | 'down' | 'stable'
  }
  icon?: React.ComponentType<any>
  color?: 'offstar' | 'quantum' | 'ionet' | 'neutral'
}

export interface ChartDataPoint {
  timestamp: string
  value: number
  label?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<any>
  badge?: number | string
  submenu?: NavigationItem[]
}

// Event Types
export interface SystemEvent {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
  timestamp: string
  source: 'system' | 'ai' | 'user' | 'ionet' | 'mobile'
  data?: any
}

export interface WebSocketMessage {
  type: string
  data: any
  timestamp: string
  source: string
}

// Configuration Types
export interface AppConfig {
  api: {
    baseUrl: string
    timeout: number
    retries: number
  }
  features: {
    aiGeneration: boolean
    ionetProcessing: boolean
    quantumAnalytics: boolean
    mobileIntegration: boolean
  }
  theme: {
    mode: 'light' | 'dark' | 'auto'
    primaryColor: string
  }
}