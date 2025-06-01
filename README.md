# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo
The portfolio is currently running at: http://localhost:5174/

## ✨ Features

- **Modern Design**: Clean and professional UI with gradient accents
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Interactive Components**: Filterable projects, contact form, and smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation with dark mode toggle
│   ├── Hero.jsx        # Landing section with intro
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills and technologies
│   ├── Projects.jsx    # Project showcase with filtering
│   ├── Contact.jsx     # Contact form and information
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization Guide

### 1. Update Personal Information
- Edit contact details in `src/components/Contact.jsx`
- Update social links in `src/components/Hero.jsx` and `src/components/Footer.jsx`
- Modify the bio and description in `src/components/About.jsx`

### 2. Add Projects
- Update the projects array in `src/components/Projects.jsx`
- Add project images to the `public/` folder
- Update GitHub and demo links

### 3. Update Skills
- Modify skill categories and levels in `src/components/Skills.jsx`
- Add or remove technologies from the tech stack

### 4. Styling Customization
- Colors and themes: Update `tailwind.config.js`
- Fonts: Modify font imports in `src/index.css`
- Animations: Customize in individual components

## 🚀 Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This project is ready to deploy on:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for continuous deployment

## 📝 TODO / Next Steps

- [ ] Add real project images and screenshots
- [ ] Connect contact form to a backend service (e.g., Formspree, Netlify Forms)
- [ ] Add a blog section (optional)
- [ ] Implement resume PDF download functionality
- [ ] Add real social media links
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Add testimonials section
- [ ] Implement project detail pages

## 🐛 Known Issues

- CSS import order warning (doesn't affect functionality)
- Placeholder project images need to be replaced
- Social links are currently placeholder

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by the developer**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
