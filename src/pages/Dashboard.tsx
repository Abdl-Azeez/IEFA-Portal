import { TrendingUp, TrendingDown, DollarSign, Users, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
  trend: 'up' | 'down'
  description?: string
}

function StatCard({ title, value, change, icon, trend, description }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Card className="overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-[1.02] border-l-4 border-l-primary" style={{ backgroundColor: 'white' }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium" style={{ color: '#737692' }}>{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ color: '#000000' }}>
          {value}
        </div>
        <div className="flex items-center gap-2 mt-2">
          {trend === 'up' ? (
            <Badge variant="default" className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              {change}%
            </Badge>
          ) : (
            <Badge variant="default" className="bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              {change}%
            </Badge>
          )}
          <p className="text-xs" style={{ color: '#737692' }}>{description || 'vs last month'}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Dashboard() {
  console.log('Dashboard component loaded!')
  
  const stats = [
    {
      title: 'Total Assets',
      value: '$2.45M',
      change: 12.5,
      trend: 'up' as const,
      icon: <DollarSign className="h-4 w-4" />,
      description: 'vs last month'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: 8.2,
      trend: 'up' as const,
      icon: <Users className="h-4 w-4" />,
      description: 'vs last month'
    },
    {
      title: 'Market Growth',
      value: '24.8%',
      change: -3.1,
      trend: 'down' as const,
      icon: <TrendingUp className="h-4 w-4" />,
      description: 'vs last month'
    },
    {
      title: 'Transactions',
      value: '456',
      change: 15.3,
      trend: 'up' as const,
      icon: <Activity className="h-4 w-4" />,
      description: 'vs last month'
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#000000' }}>Dashboard</h1>
        <p className="mt-2" style={{ color: '#737692' }}>
          Welcome back! Here's what's happening with your portfolio today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-in slide-in-from-bottom-4 duration-500"
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart Card - Takes 4 columns */}
        <Card className="lg:col-span-4 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'white' }}>
          <CardHeader>
            <CardTitle style={{ color: '#000000' }}>Portfolio Performance</CardTitle>
            <CardDescription style={{ color: '#737692' }}>Last 6 months overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
                alt="Chart placeholder"
                className="w-full h-full object-cover opacity-20 blur-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto text-primary mb-2 animate-pulse" />
                  <p className="text-sm" style={{ color: '#737692' }}>Portfolio Performance Chart</p>
                  <p className="text-xs mt-1" style={{ color: '#737692' }}>Interactive visualization coming soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity - Takes 3 columns */}
        <Card className="lg:col-span-3 transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'white' }}>
          <CardHeader>
            <CardTitle style={{ color: '#000000' }}>Recent Activity</CardTitle>
            <CardDescription style={{ color: '#737692' }}>Latest transactions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: 'Investment', amount: '+$5,000', time: '2 hours ago', trend: 'up' },
                { type: 'Withdrawal', amount: '-$2,500', time: '5 hours ago', trend: 'down' },
                { type: 'Dividend', amount: '+$1,200', time: '1 day ago', trend: 'up' },
                { type: 'Investment', amount: '+$3,000', time: '2 days ago', trend: 'up' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border transition-all duration-200 animate-in slide-in-from-right-4"
                  style={{ backgroundColor: 'white', animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      activity.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                    }`}>
                      {activity.trend === 'up' ? (
                        <ArrowUpRight className="h-5 w-5" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#000000' }}>{activity.type}</p>
                      <p className="text-xs" style={{ color: '#737692' }}>{activity.time}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${
                    activity.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {activity.amount}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: 'white' }}>
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: '#000000' }}>Sukuk Market</CardTitle>
            <CardDescription style={{ color: '#737692' }}>Islamic bonds performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#737692' }}>Total Value</span>
                <span className="text-lg font-bold" style={{ color: '#000000' }}>$1.2B</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+5.2%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-3/4 animate-in slide-in-from-left duration-1000"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: 'white' }}>
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: '#000000' }}>Equity Funds</CardTitle>
            <CardDescription style={{ color: '#737692' }}>Sharia-compliant stocks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#737692' }}>Total Value</span>
                <span className="text-lg font-bold" style={{ color: '#000000' }}>$850M</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+3.8%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-2/3 animate-in slide-in-from-left duration-1000" style={{ animationDelay: '200ms' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" style={{ backgroundColor: 'white' }}>
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: '#000000' }}>Real Estate</CardTitle>
            <CardDescription style={{ color: '#737692' }}>Property investments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: '#737692' }}>Total Value</span>
                <span className="text-lg font-bold" style={{ color: '#000000' }}>$400M</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-600">-1.2%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-1/3 animate-in slide-in-from-left duration-1000" style={{ animationDelay: '400ms' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'white' }}>
        <CardHeader>
          <CardTitle style={{ color: '#000000' }}>Quick Actions</CardTitle>
          <CardDescription style={{ color: '#737692' }}>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'New Investment', icon: '💰', color: 'bg-blue-500/10 text-blue-600' },
              { label: 'View Reports', icon: '📊', color: 'bg-green-500/10 text-green-600' },
              { label: 'Market Analysis', icon: '📈', color: 'bg-purple-500/10 text-purple-600' },
              { label: 'Portfolio Review', icon: '📋', color: 'bg-orange-500/10 text-orange-600' },
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-accent transition-all duration-200 hover:scale-105 animate-in fade-in-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{action.icon}</span>
                <span className="text-sm font-medium" style={{ color: '#000000' }}>{action.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
