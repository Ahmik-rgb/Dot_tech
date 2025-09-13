# DOT Technology Website

## Overview

DOT Technology is a React-based corporate website showcasing an African technology company focused on local innovation and manufacturing. The application features a modern, dark-themed design with animated sections, responsive navigation, and comprehensive company information including solutions, innovation lab details, partnerships, and career opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based development
- **Build System**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS for utility-first styling with custom design system
- **Component Library**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Styling Approach**: CSS custom properties for theming with dark mode design system

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Setup**: Development server with Vite integration for SSR capabilities
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **API Structure**: RESTful API endpoints prefixed with `/api` for clear separation

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured through Neon serverless connection
- **Schema Management**: Centralized schema definition in shared directory with Zod validation
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Development Experience
- **Hot Reloading**: Vite HMR integration with Express server
- **Error Handling**: Runtime error overlays and comprehensive error boundaries
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Path Aliases**: Configured for clean imports across client and shared modules

### External Dependencies

- **Database Service**: Neon serverless PostgreSQL for cloud-native database hosting
- **UI Components**: Radix UI for accessible headless components
- **Animation**: CSS transitions and animations for smooth user interactions
- **Font Loading**: Google Fonts integration for Inter typography
- **Development Tools**: Replit-specific plugins for development environment integration
- **Form Management**: React Hook Form with Hookform resolvers for form validation
- **Date Handling**: date-fns library for date manipulation and formatting