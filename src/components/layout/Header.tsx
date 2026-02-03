import { Bell, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export function Header() {
  const [notifications] = useState(3)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b px-6 transition-all duration-200" style={{ backgroundColor: 'white' }}>
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg border border-input pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
            style={{ backgroundColor: 'white', color: '#000000' }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse"
            >
              {notifications}
            </Badge>
          )}
        </Button>

        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 ring-2 ring-primary/20 transition-all duration-200 hover:ring-primary/40">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=IEFA" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium" style={{ color: '#000000' }}>John Doe</p>
            <p className="text-xs" style={{ color: '#737692' }}>john@iefa.org</p>
          </div>
        </div>
      </div>
    </header>
  )
}
