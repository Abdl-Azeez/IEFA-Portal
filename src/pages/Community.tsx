import { motion } from 'framer-motion'
import { Search, MessageSquare, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

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

export default function Community() {
  const [selectedTab, setSelectedTab] = useState('discussions')

  const discussions = [
    {
      title: 'Understanding Shariah Compliance in Murabaha Transactions',
      description: 'Can Someone calrify how late payment penalties are treated under AAOIFI standards?',
      poster: 'A. Musa',
      time: '2 hours ago',
      module: 'Module 4',
      moduleColor: 'bg-[#D52B1E]',
      replies: 12
    },
    {
      title: 'The Role of Risk Sharing in Islamic Finance',
      description: 'What measures are in place to ensure risk is fairly distributed among parties?',
      poster: 'S. Khan',
      time: '3 hours ago',
      module: 'Module 3',
      moduleColor: 'bg-orange-600',
      replies: 5
    },
    {
      title: 'Islamic Banking vs Conventional Banking',
      description: 'How do profit-sharing models differ from interest-based lending?',
      poster: 'L. Ahmed',
      time: '1 hour ago',
      module: 'Module 2',
      moduleColor: 'bg-blue-600',
      replies: 8
    },
    {
      title: 'The Impact of Zakat on Economic Development',
      description: 'Can we discuss how zakat contributes to societal welfare?',
      poster: 'F. Rahman',
      time: '15 minutes ago',
      module: 'Module 5',
      moduleColor: 'bg-purple-600',
      replies: 2
    }
  ]

  const mentors = [
    {
      name: 'Dr. Salman Al-Farsi',
      role: 'Senior Portfolio Manager',
      organization: 'ESG',
      image: '👨‍💼',
      available: true,
      expertise: ["Shari'ah Audit", "Career Advice"]
    },
    {
      name: 'Dr. Fatima Al-Farruq',
      role: 'Senior Portfolio Manager',
      organization: 'ESG',
      image: '👩‍💼',
      available: true,
      expertise: ["Career Advice"]
    },
    {
      name: 'Dr. Ali Badar',
      role: 'Senior Portfolio Manager',
      organization: 'ESG',
      image: '👨‍💼',
      available: true,
      expertise: ["Shari'ah Audit", "Career Advice"]
    }
  ]

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold tracking-tight text-[#000000]">Community</h1>
        <p className="text-[#737692] mt-2">
          Engage with fellow learners, instructor and professional. Ask questions, share insights, and grow
          together within IEFA's learning community.
        </p>
      </motion.div>

      {/* Search and Action Button */}
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder={selectedTab === 'mentorship' ? 'Search discussions, topics or members' : 'Search discussions, topics or members'}
            className="pl-10"
          />
        </div>
        {selectedTab === 'discussions' && (
          <Button className="bg-[#D52B1E] hover:bg-[#B8241B] text-white">
            Start a Discussion
          </Button>
        )}
        {selectedTab === 'mentorship' && (
          <Button className="bg-[#D52B1E] hover:bg-[#B8241B] text-white">
            Mentorship
          </Button>
        )}
      </motion.div>

      {/* Main Tabs */}
      <Tabs defaultValue="discussions" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="bg-transparent h-auto p-0 mb-6 gap-2 border-b-0 w-full justify-start overflow-x-auto scrollbar-hide -mx-2 px-2 flex-nowrap md:flex-wrap md:overflow-visible md:px-0">
          <TabsTrigger 
            value="discussions"
            className="bg-white px-6 py-2 text-sm font-medium data-[state=active]:bg-[#D52B1E] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-[#000000] border border-gray-200 data-[state=active]:border-[#D52B1E] shrink-0"
          >
            Discussions
          </TabsTrigger>
          <TabsTrigger 
            value="study-groups"
            className="bg-white px-6 py-2 text-sm font-medium data-[state=active]:bg-[#D52B1E] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-[#000000] border border-gray-200 data-[state=active]:border-[#D52B1E] shrink-0"
          >
            Study Groups
          </TabsTrigger>
          <TabsTrigger 
            value="mentorship"
            className="bg-white px-6 py-2 text-sm font-medium data-[state=active]:bg-[#D52B1E] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-[#000000] border border-gray-200 data-[state=active]:border-[#D52B1E] shrink-0"
          >
            Mentorship
          </TabsTrigger>
          <TabsTrigger 
            value="events"
            className="bg-white px-6 py-2 text-sm font-medium data-[state=active]:bg-[#D52B1E] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-[#000000] border border-gray-200 data-[state=active]:border-[#D52B1E] shrink-0"
          >
            Events
          </TabsTrigger>
        </TabsList>

        {/* Discussions Tab */}
        <TabsContent value="discussions" className="mt-6">
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-[#000000]">{discussion.title}</h3>
                          <Badge className={`${discussion.moduleColor} text-white hover:${discussion.moduleColor}`}>
                            {discussion.module}
                          </Badge>
                        </div>
                        <p className="text-sm text-[#737692] mb-3">{discussion.description}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#737692]">
                          <span>Posted by {discussion.poster}</span>
                          <span>• {discussion.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#737692] sm:mt-1">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm font-medium">{discussion.replies} replies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Study Groups Tab */}
        <TabsContent value="study-groups" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: 'CIFP Study Group', members: 45, topic: 'Module 4 Discussion', nextSession: 'Tomorrow, 3:00 PM' },
              { name: 'Sukuk Investment Circle', members: 28, topic: 'Market Analysis', nextSession: 'Wednesday, 5:00 PM' },
              { name: 'ESG Finance Enthusiasts', members: 32, topic: 'Sustainable Finance', nextSession: 'Friday, 2:00 PM' },
              { name: 'Shariah Compliance Hub', members: 56, topic: 'AAOIFI Standards', nextSession: 'Thursday, 4:00 PM' }
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-[#000000] mb-2">{group.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-[#737692]">
                          <Users className="h-4 w-4" />
                          <span>{group.members} members</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-[#737692] mb-1">Current Topic</p>
                        <p className="font-medium text-[#000000]">{group.topic}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#737692] mb-1">Next Session</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#D52B1E]" />
                          <p className="font-medium text-[#000000]">{group.nextSession}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-[#D52B1E] hover:bg-[#B8241B] text-white">
                        Join Group
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Mentorship Tab */}
        <TabsContent value="mentorship" className="mt-6">
          <div className="grid gap-6 md:grid-cols-4">
            {/* Filter Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#000000] text-lg">Find a Mentor</CardTitle>
                  <p className="text-sm text-[#737692]">Connect with a experienced professionals and instructors</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Expertise Filter */}
                  <div>
                    <h4 className="font-semibold text-[#000000] mb-3">Expertise</h4>
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Filter by Name" className="pl-10 text-sm" />
                    </div>
                  </div>

                  {/* Availability Filter */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-[#000000]">Availability</h4>
                      <span className="text-xs text-[#737692]">12 replies</span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-[#000000]">Takaful</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-[#000000]">Sukuk</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked className="rounded border-gray-300" />
                        <span className="text-sm text-[#000000]">Shari'ah Audit</span>
                      </label>
                    </div>
                  </div>

                  {/* Role Filter */}
                  <div>
                    <h4 className="font-semibold text-[#000000] mb-3">Role (Instructor, Professional)</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-[#000000]">Impact Guidance</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked className="rounded border-gray-300" />
                        <span className="text-sm text-[#000000]">Career Advice</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mentors Grid */}
            <div className="md:col-span-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#D52B1E] to-[#6F1610] flex items-center justify-center text-4xl">
                          {mentor.image}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#000000]">{mentor.name}</h4>
                          <p className="text-sm text-[#737692]">{mentor.role}</p>
                          <p className="text-xs text-[#737692]">{mentor.organization}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-[#737692]">Available for Mentorship</span>
                        </div>
                        <Button className="w-full bg-[#D52B1E] hover:bg-[#B8241B] text-white text-sm">
                          Request Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events" className="mt-6">
          <div className="space-y-4">
            {[
              { 
                title: 'Islamic Finance Summit 2026',
                date: 'March 15, 2026',
                time: '9:00 AM - 5:00 PM',
                type: 'Conference',
                location: 'Virtual',
                attendees: 250
              },
              {
                title: 'Sukuk Market Workshop',
                date: 'February 20, 2026',
                time: '2:00 PM - 4:00 PM',
                type: 'Workshop',
                location: 'Dubai',
                attendees: 45
              },
              {
                title: 'ESG Investment Webinar',
                date: 'February 12, 2026',
                time: '10:00 AM - 11:30 AM',
                type: 'Webinar',
                location: 'Online',
                attendees: 180
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-[#000000]">{event.title}</h3>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            {event.type}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-[#737692]">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-[#737692]">
                            <span>📍 {event.location}</span>
                            <span>• {event.attendees} registered</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-[#D52B1E] hover:bg-[#B8241B] text-white">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
