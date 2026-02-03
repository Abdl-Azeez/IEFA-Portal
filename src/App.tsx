import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { Dashboard } from '@/pages/Dashboard'
import { News } from '@/pages/News'
import { MarketInsights } from '@/pages/MarketInsights'
import { LearningZone } from '@/pages/LearningZone'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
