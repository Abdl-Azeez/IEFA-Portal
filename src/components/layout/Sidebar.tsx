import { LayoutDashboard, Newspaper, TrendingUp, BookOpen, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Market Insights', href: '/market-insights', icon: TrendingUp },
  { name: 'Learning Zone', href: '/learning-zone', icon: BookOpen },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen border-r transition-all duration-300",
      isCollapsed ? "w-20" : "w-[297px]"
    )} style={{ backgroundColor: 'white' }}>
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-3 flex-1">
            <img 
              src="/Logo.svg" 
              alt="IEFA Logo" 
              className={cn(
                "transition-all duration-300",
                isCollapsed ? "h-8 w-auto" : "h-10 w-auto"
              )}
            />
          </div>
          <button
            onClick={onToggle}
            className="rounded-md p-1.5 hover:bg-accent transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>
        
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-[#737692]",
                  isCollapsed && "justify-center"
                )
              }
              title={isCollapsed ? item.name : undefined}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    "h-5 w-5 transition-transform duration-200 flex-shrink-0",
                    isActive ? "scale-110" : "group-hover:scale-105"
                  )} />
                  {!isCollapsed && <span>{item.name}</span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t p-4">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                "hover:bg-accent hover:text-accent-foreground",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-[#737692]",
                isCollapsed && "justify-center"
              )
            }
            title={isCollapsed ? "Settings" : undefined}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </div>
    </aside>
  )
}
