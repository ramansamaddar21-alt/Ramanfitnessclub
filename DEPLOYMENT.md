# Deploy to Vercel - Step by Step Guide

## Method 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
- Enter your email
- Click the verification link sent to your email

### Step 3: Deploy
```bash
vercel
```
- Press Enter to accept defaults
- Your site will be deployed!

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Method 2: Deploy via Vercel Dashboard (Recommended for beginners)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "raman-fitness-workshop")
3. Don't initialize with README (we already have files)

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/raman-fitness-workshop.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login (use GitHub account)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your site is live! 🎉

---

## Your Project Details

**Framework:** Next.js 14
**Build Command:** `npm run build` (auto-detected)
**Output Directory:** `.next` (auto-detected)
**Install Command:** `npm install` (auto-detected)

---

## Environment Variables (if needed later)
None required for now!

---

## Custom Domain (Optional)
After deployment, you can add a custom domain:
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions

---

## Troubleshooting

### Build fails?
- Make sure all dependencies are installed: `npm install`
- Test build locally: `npm run build`
- Check for TypeScript errors: `npm run lint`

### Images not showing?
- All images are in `/public` folder ✅
- They will work automatically on Vercel

### Need help?
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## Quick Commands Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (production)
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## What Happens After Deployment?

✅ Your site gets a URL like: `your-project.vercel.app`
✅ Automatic HTTPS/SSL certificate
✅ Global CDN for fast loading
✅ Automatic deployments on every git push
✅ Preview deployments for branches
✅ Analytics and performance monitoring

---

## Next Steps After Deployment

1. Share your live URL with clients
2. Test on mobile devices
3. Add custom domain (optional)
4. Monitor analytics on Vercel dashboard
5. Make updates by pushing to GitHub (auto-deploys!)

---

**Your site is ready to go live! 🚀**
