import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatedLayout } from './AnimatedLayout'

export function MainLayout() {
  // Initialize sidebar state based on screen size
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 // Collapsed by default on mobile (< md breakpoint)
    }
    return false
  })

  // Handle window resize to automatically collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !isSidebarCollapsed) {
        setIsSidebarCollapsed(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isSidebarCollapsed])

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
          style={{ 
            marginLeft: isSidebarCollapsed ? '80px' : '297px', 
            minHeight: '900px' 
          }}
        >
          <Header />
          <main className="flex-1 p-3 sm:p-4 md:p-6">
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
