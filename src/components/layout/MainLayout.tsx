import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { AnimatedLayout } from './AnimatedLayout'

export function MainLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#FFEFEF' }}>
      {/* Main content area with sidebar */}
      <div className="relative min-h-screen">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
        <div 
          className="flex flex-col min-h-screen transition-all duration-300"
          style={{ marginLeft: isSidebarCollapsed ? '80px' : '297px' }}
        >
          <Header />
          <main className="flex-1 p-6">
            <AnimatedLayout>
              <Outlet />
            </AnimatedLayout>
          </main>
        </div>
      </div>
      {/* Footer below sidebar area - spans full width */}
      <Footer />
    </div>
  )
}
