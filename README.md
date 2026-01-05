# Workshop React App

A Next.js application converted from HTML, ready for Vercel deployment.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS3
