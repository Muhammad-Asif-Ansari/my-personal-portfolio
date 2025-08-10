# Professional Portfolio - Muhammad Asif Ansari

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a clean design, dark mode support, and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and professional layout with gradient backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Custom CSS animations and transitions
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper focus states

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Icons**: SVG icons (no external dependencies)
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Edit `src/config.js` to update your personal information:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  skills: ["Your", "Skills", "Here"],
  projects: [
    {
      title: "Project Title",
      desc: "Project description",
      live: "https://live-demo-url.com",
      github: "https://github.com/yourusername/project"
    }
  ]
}
```

### Styling
- Colors: Modify Tailwind classes in components
- Animations: Edit `src/index.css` for custom animations
- Layout: Adjust component structure in `src/components/`

### Adding Projects
1. Add project details to `portfolioData.projects` in `config.js`
2. Optionally add project images to `public/` folder
3. Update project links and descriptions

## 🚀 Building for Production

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Deploy with one click

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy

### Option 3: GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name"
   }
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```
4. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Projects.jsx   # Projects section
│   │   ├── Contact.jsx    # Contact section
│   │   ├── Navbar.jsx     # Navigation
│   │   └── Footer.jsx     # Footer
│   ├── config.js          # Portfolio data
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind configuration
```

## 🎯 Key Components

### Hero Section (`Hero.jsx`)
- Animated background with gradient
- Social media links
- Call-to-action buttons
- Scroll indicator

### Projects Section (`Projects.jsx`)
- Project cards with hover effects
- Technology tags
- Live demo and GitHub links
- Responsive grid layout

### About Section (`About.jsx`)
- Skills display
- Professional description
- Clean, minimal design

## 🔧 Customization Tips

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in `Navbar.jsx`

### Changing Colors
- Primary colors: Update blue/purple gradient classes
- Background colors: Modify `bg-` classes
- Text colors: Update `text-` classes

### Adding Animations
- Use existing animation classes from `index.css`
- Create new keyframes for custom animations
- Apply with `animate-` classes

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and links
- Optimized typography for small screens
- Proper spacing and padding

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags in `index.html`
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🚀 Performance Tips

- Images are optimized and compressed
- CSS is purged in production
- JavaScript is minified
- Lazy loading for components (if needed)

## 📞 Support

For questions or issues:
- Check the [Vite documentation](https://vitejs.dev/)
- Review [Tailwind CSS docs](https://tailwindcss.com/)
- Open an issue on GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**
