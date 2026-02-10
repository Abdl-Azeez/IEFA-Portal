import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { Dashboard } from '@/pages/Dashboard'
import { News } from '@/pages/News'
import { MarketInsights } from '@/pages/MarketInsights'
import { LearningZone } from '@/pages/LearningZone'
import Community from '@/pages/Community'
import Directory from '@/pages/Directory'
import { NotAvailable } from '@/pages/NotAvailable'
import Questionnaire from '@/pages/Questionnaire'
import CourseResults from '@/pages/CourseResults'

function App() {
  console.log('App component loaded - routing should work now!')
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="news" element={<News />} />
          <Route path="market-insights" element={<MarketInsights />} />
          <Route path="learning-zone" element={<LearningZone />} />
          <Route path="community" element={<Community />} />
          <Route path="directory" element={<Directory />} />
          <Route path="questionnaire" element={<Questionnaire />} />
          <Route path="course-results" element={<CourseResults />} />
          <Route path="research-reports" element={<NotAvailable />} />
          <Route path="data" element={<NotAvailable />} />
          <Route path="podcast" element={<NotAvailable />} />
          <Route path="if-professionals" element={<NotAvailable />} />
          <Route path="settings" element={<NotAvailable />} />
          <Route path="support" element={<NotAvailable />} />
          {/* Catch-all route for any undefined paths */}
          <Route path="*" element={<NotAvailable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
