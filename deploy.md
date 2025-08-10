# Quick Deployment Guide

## 🚀 Deploy Your Portfolio in 5 Minutes

### Step 1: Prepare Your Code
```bash
# Make sure all changes are committed
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

### Step 2: Choose Your Platform

#### Option A: Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy" - that's it!

#### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy site"

#### Option C: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### Step 3: Custom Domain (Optional)
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In your hosting platform, add custom domain
3. Update DNS settings as instructed

### Step 4: Update Links
1. Update your resume with the new portfolio URL
2. Update LinkedIn profile
3. Share with potential employers!

## 🎯 Your Portfolio URL
Once deployed, your portfolio will be available at:
- Vercel: `https://your-project-name.vercel.app`
- Netlify: `https://your-project-name.netlify.app`
- GitHub Pages: `https://yourusername.github.io/repo-name`

## 📝 Next Steps
1. Add your actual projects with real links
2. Upload your resume to the `public/` folder
3. Add project screenshots
4. Customize colors and styling
5. Add analytics (Google Analytics, etc.)

## 🔧 Troubleshooting
- **Build fails**: Check if all dependencies are installed
- **Styling issues**: Make sure Tailwind CSS is properly configured
- **Images not loading**: Check file paths in `public/` folder
- **Links broken**: Verify all URLs in `config.js`

## 📞 Need Help?
- Check the main README.md for detailed instructions
- Review platform-specific documentation
- Open an issue on GitHub

**Your portfolio is now live! 🎉** 