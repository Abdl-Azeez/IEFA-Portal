import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, BarChart3, PieChart, ArrowUpRight, ArrowDownRight, Globe, Building2, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

interface MarketCardProps {
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  icon: React.ReactNode
  color: string
  delay?: number
}

function MarketCard({ title, value, change, trend, icon, color, delay = 0 }: MarketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <motion.div
              className={`h-12 w-12 rounded-full ${color} flex items-center justify-center`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
            <Badge className={trend === 'up' ? 'bg-green-500/10 text-green-700 border-green-500/20' : 'bg-red-500/10 text-red-700 border-red-500/20'}>
              {trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
              {Math.abs(change)}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-sm font-medium text-[#737692] mb-1">{title}</h3>
          <motion.p
            className="text-3xl font-bold text-[#000000]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring" }}
          >
            {value}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface IndexCardProps {
  name: string
  value: string
  change: number
  trend: 'up' | 'down'
  percentage: string
  delay?: number
}

function IndexCard({ name, value, change, trend, percentage, delay = 0 }: IndexCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-200 cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <motion.div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${
            trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
          }`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {trend === 'up' ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
        </motion.div>
        <div>
          <h4 className="font-semibold text-[#000000] group-hover:text-primary transition-colors">{name}</h4>
          <p className="text-sm text-[#737692]">{value}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-lg font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '+' : ''}{percentage}
        </p>
        <p className="text-xs text-[#737692]">{Math.abs(change)} points</p>
      </div>
    </motion.div>
  )
}

export function MarketInsights() {
  const marketOverview = [
    {
      title: 'Total Market Cap',
      value: '$3.5T',
      change: 12.5,
      trend: 'up' as const,
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-500/10'
    },
    {
      title: 'Sukuk Issuance',
      value: '$145B',
      change: 8.3,
      trend: 'up' as const,
      icon: <Building2 className="h-6 w-6 text-green-600" />,
      color: 'bg-green-500/10'
    },
    {
      title: 'Active Institutions',
      value: '1,234',
      change: 5.7,
      trend: 'up' as const,
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      color: 'bg-purple-500/10'
    },
    {
      title: 'Trading Volume',
      value: '$89B',
      change: -2.4,
      trend: 'down' as const,
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      color: 'bg-orange-500/10'
    }
  ]

  const indices = [
    { name: 'DJIM World', value: '3,456.78', change: 45.23, trend: 'up' as const, percentage: '+1.32%' },
    { name: 'S&P 500 Shariah', value: '2,345.67', change: 23.45, trend: 'up' as const, percentage: '+1.01%' },
    { name: 'FTSE Shariah All-World', value: '1,234.56', change: 12.34, trend: 'up' as const, percentage: '+1.00%' },
    { name: 'MSCI Islamic', value: '987.65', change: -5.43, trend: 'down' as const, percentage: '-0.55%' },
  ]

  const topPerformers = [
    { name: 'Al Rajhi Bank', sector: 'Banking', change: '+5.4%', trend: 'up' as const },
    { name: 'Dubai Islamic Bank', sector: 'Banking', change: '+4.8%', trend: 'up' as const },
    { name: 'Qatar Islamic Bank', sector: 'Banking', change: '+4.2%', trend: 'up' as const },
    { name: 'Emirates NBD', sector: 'Financial Services', change: '+3.9%', trend: 'up' as const },
  ]

  const sectors = [
    { name: 'Banking', percentage: 35, color: 'bg-blue-500' },
    { name: 'Real Estate', percentage: 25, color: 'bg-green-500' },
    { name: 'Technology', percentage: 20, color: 'bg-purple-500' },
    { name: 'Healthcare', percentage: 12, color: 'bg-orange-500' },
    { name: 'Other', percentage: 8, color: 'bg-gray-500' },
  ]

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold tracking-tight text-[#000000]">Market Insights</h1>
        <p className="mt-2 text-[#737692]">
          Real-time data and analysis of Islamic finance markets
        </p>
      </motion.div>

      {/* Market Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {marketOverview.map((market, index) => (
          <MarketCard key={market.title} {...market} delay={index * 0.1} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Major Indices */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-[#000000]">Major Indices</CardTitle>
                  <CardDescription className="text-[#737692]">Shariah-compliant market indices</CardDescription>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <PieChart className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {indices.map((index, idx) => (
                  <IndexCard key={index.name} {...index} delay={0.4 + idx * 0.1} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Market Chart Placeholder */}
        <motion.div variants={itemVariants}>
          <Card className="transition-all duration-300 hover:shadow-xl h-full">
            <CardHeader>
              <CardTitle className="text-[#000000]">Market Trend</CardTitle>
              <CardDescription className="text-[#737692]">30-day performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-lg relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <TrendingUp className="h-16 w-16 mx-auto text-primary mb-3" />
                  </motion.div>
                  <p className="text-sm text-[#737692] font-medium">Chart Visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Performers and Sector Distribution */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Performers */}
        <motion.div variants={itemVariants}>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-[#000000]">Top Performers</CardTitle>
              <CardDescription className="text-[#737692]">Best performing stocks today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPerformers.map((stock, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100 hover:border-green-200 transition-all duration-200 cursor-pointer"
                  >
                    <div>
                      <h4 className="font-semibold text-[#000000]">{stock.name}</h4>
                      <p className="text-sm text-[#737692]">{stock.sector}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2"
                    >
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-lg font-bold text-green-600">{stock.change}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sector Distribution */}
        <motion.div variants={itemVariants}>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-[#000000]">Sector Distribution</CardTitle>
              <CardDescription className="text-[#737692]">Market composition by sector</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={sector.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#000000]">{sector.name}</span>
                      <span className="text-[#737692]">{sector.percentage}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${sector.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${sector.percentage}%` }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pie Chart Visualization */}
              <div className="mt-6 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <motion.div
                    className="absolute inset-0 rounded-full border-8 border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#000000]">100%</p>
                      <p className="text-xs text-[#737692]">Total</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Market Summary */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-[#000000]">Market Summary</CardTitle>
            <CardDescription className="text-[#737692]">Key highlights and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: 'Market Sentiment', value: 'Bullish', color: 'text-green-600' },
                { label: 'Volatility Index', value: 'Low', color: 'text-blue-600' },
                { label: 'Volume Trend', value: 'Increasing', color: 'text-purple-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white rounded-lg text-center hover:shadow-md transition-all duration-200"
                >
                  <p className="text-sm text-[#737692] mb-1">{item.label}</p>
                  <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
