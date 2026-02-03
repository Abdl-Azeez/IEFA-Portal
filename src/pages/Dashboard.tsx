import { motion } from 'framer-motion'
import { TrendingUp, Play, Clock, BookOpen, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

// Circular Progress Component
interface CircularProgressProps {
  percentage: number
  color: string
  label: string
  sublabel: string
}

function CircularProgress({ percentage, color, label, sublabel }: CircularProgressProps) {
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="relative w-44 h-44">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="12"
            fill="transparent"
          />
          <motion.circle
            cx="88"
            cy="88"
            r={radius}
            stroke={color}
            strokeWidth="12"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className="text-3xl font-bold text-[#000000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-[#000000]">{label}</p>
      <p className="text-xs text-[#737692]">{sublabel}</p>
    </motion.div>
  )
}

// Top Gainers Data
const topGainers = [
  { name: 'Islamic Finance Corp', symbol: 'IFC', price: '$124.50', change: '+5.2%', trend: 'up' as const },
  { name: 'Halal Investment Fund', symbol: 'HIF', price: '$89.30', change: '+4.8%', trend: 'up' as const },
  { name: 'Sukuk Global ETF', symbol: 'SGE', price: '$156.20', change: '+3.9%', trend: 'up' as const },
  { name: 'Shariah Tech Index', symbol: 'STI', price: '$78.90', change: '+3.5%', trend: 'up' as const },
  { name: 'Ethical Growth Fund', symbol: 'EGF', price: '$234.10', change: '+2.8%', trend: 'up' as const },
]

// Course Suggestions Data
const courseSuggestions = [
  {
    title: 'Introduction to Islamic Finance',
    duration: '2h 30m',
    lessons: 12,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop',
    progress: 0,
  },
  {
    title: 'Sukuk Investment Strategies',
    duration: '3h 15m',
    lessons: 18,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
    progress: 45,
  },
  {
    title: 'Risk Management in Halal Investing',
    duration: '1h 45m',
    lessons: 8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
    progress: 80,
  },
]

export function Dashboard() {
  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#000000]">
            Hello, <span className="text-primary">Ibrahim Shenshen!</span>
          </h1>
          <p className="mt-1 text-[#737692]">
            Track your learning progress and see assets and trends
          </p>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Top Gainers & Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Gainers Table */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden bg-white shadow-sm border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-[#000000]">Top Gainers</CardTitle>
                  <motion.button 
                    className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    View All <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-2 text-xs font-medium text-[#737692] uppercase tracking-wider">Asset</th>
                        <th className="text-left py-3 px-2 text-xs font-medium text-[#737692] uppercase tracking-wider">Symbol</th>
                        <th className="text-right py-3 px-2 text-xs font-medium text-[#737692] uppercase tracking-wider">Price</th>
                        <th className="text-right py-3 px-2 text-xs font-medium text-[#737692] uppercase tracking-wider">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topGainers.map((asset, index) => (
                        <motion.tr
                          key={asset.symbol}
                          className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <td className="py-3 px-2">
                            <span className="text-sm font-medium text-[#000000]">{asset.name}</span>
                          </td>
                          <td className="py-3 px-2">
                            <span className="text-sm text-[#737692]">{asset.symbol}</span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="text-sm font-medium text-[#000000]">{asset.price}</span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
                              <TrendingUp className="h-3 w-3" />
                              {asset.change}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Course Suggestions */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden bg-white shadow-sm border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-[#000000]">Course Suggestions</CardTitle>
                  <motion.button 
                    className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    See All <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  {courseSuggestions.map((course, index) => (
                    <motion.div
                      key={course.title}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.div
                            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Play className="h-5 w-5 text-primary ml-1" />
                          </motion.div>
                        </div>
                        {course.progress > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ delay: 0.8, duration: 0.5 }}
                            />
                          </div>
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-[#000000] line-clamp-2 mb-2">{course.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-[#737692]">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {course.lessons} lessons
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Progress Circles & User Image */}
        <div className="space-y-6">
          {/* User Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Ibrahim Shenshen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg">Ibrahim Shenshen</p>
              <p className="text-white/80 text-sm">Financial Analyst</p>
            </div>
          </motion.div>

          {/* Progress Circles */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white shadow-sm border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#000000]">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around py-4">
                  <CircularProgress
                    percentage={75}
                    color="#D52B1E"
                    label="Course Progress"
                    sublabel="3 of 4 completed"
                  />
                  <CircularProgress
                    percentage={60}
                    color="#10B981"
                    label="Weekly Goal"
                    sublabel="12 of 20 hours"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#FFEFEF]">
                    <div>
                      <p className="text-xs text-[#737692]">Portfolio Value</p>
                      <p className="text-lg font-bold text-[#000000]">$124,500</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">+12.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#FFEFEF]">
                    <div>
                      <p className="text-xs text-[#737692]">This Month Returns</p>
                      <p className="text-lg font-bold text-[#000000]">$3,250</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">+8.2%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
