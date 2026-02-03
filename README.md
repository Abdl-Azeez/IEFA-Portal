# IEFA Portal

A modern React TypeScript application built with Vite, shadcn/ui, and Lucide icons.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
IEFA-Portal/
├── src/
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── components/
│   │   └── ui/               # shadcn/ui components (add here)
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── style.css             # Global styles with Tailwind
├── components.json            # shadcn/ui configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## Adding shadcn/ui Components

To add shadcn/ui components to your project, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Using Lucide Icons

Import icons from `lucide-react`:

```tsx
import { Home, User, Settings } from 'lucide-react'

function MyComponent() {
  return (
    <div>
      <Home className="w-5 h-5" />
      <User className="w-5 h-5" />
      <Settings className="w-5 h-5" />
    </div>
  )
}
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## License

MIT
# IEFA-Portal
