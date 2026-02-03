import { motion } from 'framer-motion'
import { BookOpen, Video, FileText, Award, Clock, Users, PlayCircle, CheckCircle, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

interface CourseCardProps {
  title: string
  description: string
  instructor: string
  duration: string
  students: number
  level: string
  progress?: number
  rating: number
  type: 'video' | 'article' | 'course'
  image: string
  delay?: number
}

function CourseCard({ title, description, instructor, duration, students, level, progress, rating, type, image, delay = 0 }: CourseCardProps) {
  const typeIcons = {
    video: <Video className="h-4 w-4" />,
    article: <FileText className="h-4 w-4" />,
    course: <BookOpen className="h-4 w-4" />
  }

  const typeColors = {
    video: 'bg-red-500/10 text-red-600 border-red-500/20',
    article: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    course: 'bg-green-500/10 text-green-600 border-green-500/20'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <motion.div
            className="absolute inset-0 bg-primary/20"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {image}
          </div>
          <div className="absolute top-3 right-3">
            <Badge className={typeColors[type]}>
              {typeIcons[type]}
              <span className="ml-1 capitalize">{type}</span>
            </Badge>
          </div>
          {type === 'video' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                <PlayCircle className="h-10 w-10 text-primary" />
              </div>
            </motion.div>
          )}
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-primary border-primary">
              {level}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <CardTitle className="text-lg line-clamp-2 text-[#000000] group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-[#737692]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-[#737692]">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>
            <p className="text-sm font-medium text-[#000000]">By {instructor}</p>
            {progress !== undefined && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#737692]">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: delay + 0.3, duration: 1 }}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function LearningZone() {
  const courses = [
    {
      title: 'Introduction to Islamic Finance',
      description: 'Learn the fundamentals of Islamic finance and banking principles',
      instructor: 'Dr. Ahmed Hassan',
      duration: '6 hours',
      students: 2456,
      level: 'Beginner',
      progress: 65,
      rating: 4.8,
      type: 'course' as const,
      image: '📚'
    },
    {
      title: 'Sukuk Structures and Applications',
      description: 'Deep dive into various sukuk structures and their practical applications',
      instructor: 'Prof. Sarah Ali',
      duration: '4 hours',
      students: 1823,
      level: 'Intermediate',
      progress: 30,
      rating: 4.9,
      type: 'course' as const,
      image: '💼'
    },
    {
      title: 'Takaful Insurance Explained',
      description: 'Understanding Islamic insurance principles and mechanisms',
      instructor: 'Sheikh Mohamed',
      duration: '45 min',
      students: 3421,
      level: 'Beginner',
      rating: 4.7,
      type: 'video' as const,
      image: '🎥'
    },
    {
      title: 'Risk Management in Islamic Banking',
      description: 'Advanced techniques for managing risk in Islamic financial institutions',
      instructor: 'Dr. Fatima Khan',
      duration: '8 hours',
      students: 1234,
      level: 'Advanced',
      rating: 4.9,
      type: 'course' as const,
      image: '⚖️'
    },
    {
      title: 'Shariah Compliance Guidelines',
      description: 'Essential guide to ensuring Shariah compliance in financial products',
      instructor: 'Sheikh Abdullah',
      duration: '20 min',
      students: 4532,
      level: 'Intermediate',
      rating: 4.6,
      type: 'article' as const,
      image: '📖'
    },
    {
      title: 'Islamic Finance Market Trends 2026',
      description: 'Latest trends and innovations in Islamic finance markets',
      instructor: 'Dr. Omar Farooq',
      duration: '35 min',
      students: 2891,
      level: 'All Levels',
      rating: 4.8,
      type: 'video' as const,
      image: '📊'
    }
  ]

  const stats = [
    { label: 'Courses Completed', value: '12', icon: <CheckCircle className="h-6 w-6 text-green-600" />, color: 'bg-green-500/10' },
    { label: 'Hours Learned', value: '48', icon: <Clock className="h-6 w-6 text-blue-600" />, color: 'bg-blue-500/10' },
    { label: 'Certificates Earned', value: '8', icon: <Award className="h-6 w-6 text-yellow-600" />, color: 'bg-yellow-500/10' },
    { label: 'Learning Streak', value: '15 days', icon: <TrendingUp className="h-6 w-6 text-purple-600" />, color: 'bg-purple-500/10' }
  ]

  const achievements = [
    { title: 'Quick Learner', description: 'Completed 5 courses in a month', icon: '🏆' },
    { title: 'Dedicated Student', description: '30-day learning streak', icon: '🎯' },
    { title: 'Expert Level', description: 'Completed advanced course', icon: '⭐' }
  ]

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold tracking-tight text-[#000000]">Learning Zone</h1>
        <p className="mt-2 text-[#737692]">
          Expand your knowledge in Islamic finance and economics
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`h-12 w-12 rounded-full ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-[#737692]">{stat.label}</p>
                    <motion.p
                      className="text-2xl font-bold text-[#000000]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    >
                      {stat.value}
                    </motion.p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabs Section */}
      <motion.div variants={itemVariants}>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.filter(c => c.type === 'course').map((course, index) => (
                <CourseCard key={index} {...course} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.filter(c => c.type === 'video').map((course, index) => (
                <CourseCard key={index} {...course} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.filter(c => c.type === 'article').map((course, index) => (
                <CourseCard key={index} {...course} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Achievements Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle className="text-[#000000]">Your Achievements</CardTitle>
            </div>
            <CardDescription className="text-[#737692]">
              Milestones you've reached in your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white rounded-lg text-center hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="font-semibold text-[#000000] mb-1">{achievement.title}</h4>
                  <p className="text-sm text-[#737692]">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommended for You */}
      <motion.div variants={itemVariants}>
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#000000]">Recommended for You</CardTitle>
            <CardDescription className="text-[#737692]">
              Based on your learning history and interests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Advanced Islamic Financial Instruments', category: 'Finance', duration: '5 hours' },
                { title: 'Ethical Investment Strategies', category: 'Investment', duration: '3 hours' },
                { title: 'Digital Banking in Islamic Finance', category: 'Technology', duration: '4 hours' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <BookOpen className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h4 className="font-medium text-[#000000] group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#737692]">{item.category} • {item.duration}</p>
                    </div>
                  </div>
                  <motion.div whileHover={{ x: 4 }}>
                    <PlayCircle className="h-8 w-8 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
