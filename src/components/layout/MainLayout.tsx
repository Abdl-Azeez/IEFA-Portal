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
      <div className="relative" style={{ minHeight: '900px' }}>
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
        <div 
          className="flex flex-col transition-all duration-300"
          style={{ marginLeft: isSidebarCollapsed ? '80px' : '297px', minHeight: '900px' }}
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
