# ModernFolio - Phase 1 MVP

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Clone the project
git clone <repo-url>
cd modernfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## ⚙️ Configuration

Edit `src/config/site.ts` to customize your portfolio:

```typescript
export const siteConfig = {
  name: "Your Name",              // Your full name
  title: "Frontend Developer",    // Your professional title
  description: "Your bio...",      // Brief description
  // ... more configuration
}
```

## 📁 Project Structure

```
modernfolio/
├── src/
│   ├── app/                     # Next.js app directory
│   ├── components/              # Reusable components
│   ├── config/                  # Site configuration
│   ├── lib/                     # Utility functions
│   └── types/                   # TypeScript types
├── content/                     # Content files
├── public/                      # Static assets
└── docs/                        # Documentation
```

## 🎨 Features

- ✅ **Modern Design**: Clean, professional layout
- ✅ **Fully Responsive**: Mobile-first design
- ✅ **Dark Mode**: System preference detection
- ✅ **TypeScript**: Type-safe development
- ✅ **SEO Optimized**: Meta tags and structured data
- ✅ **Performance**: Optimized loading and rendering

## 🛠️ Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format

# Production build
npm run build
npm run start
```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Build for Static Hosting
```bash
npm run build
# Upload the .next folder
```

## 🎯 Roadmap

This is Phase 1 (MVP). Coming next:
- Advanced animations
- Blog integration  
- CMS support
- Enhanced project showcase

## 📄 License

MIT License - feel free to use for your own portfolio!