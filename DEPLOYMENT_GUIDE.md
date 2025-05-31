# Priyank Pahwa - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing Priyank Pahwa's skills as a Blockchain & Web3 Developer, Software Engineer, and AI Enthusiast.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Components**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Analytics Ready**: Google Analytics 4 integration
- **Fast Performance**: Optimized build with Vite

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
priyank-portfolio/
├── public/
│   ├── resume.pdf              # Resume PDF file
│   └── vite.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── Analytics.jsx      # Google Analytics component
│   │   ├── Contact.jsx        # Contact form and info
│   │   ├── Experience.jsx     # Education and certifications
│   │   ├── Footer.jsx         # Footer with social links
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Hero section with intro
│   │   ├── Projects.jsx       # Project showcase
│   │   └── Skills.jsx         # Skills and technologies
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── .env.example               # Environment variables template
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyankpahwa/portfolio.git
   cd priyank-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your configuration values.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Google Analytics (optional)
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact configuration
REACT_APP_EMAIL=your.email@example.com
REACT_APP_PHONE=+1234567890

# Social media links
REACT_APP_GITHUB_URL=https://github.com/yourusername
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### Customization

1. **Personal Information**: Update content in components to reflect your details
2. **Resume**: Replace `/public/resume.pdf` with your resume
3. **Projects**: Modify the projects array in `Projects.jsx`
4. **Skills**: Update the skills categories in `Skills.jsx`
5. **Styling**: Customize colors and styling in Tailwind classes

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npm run deploy:vercel
   ```

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   npm run deploy:netlify
   ```

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages** using your preferred method

## 📊 Analytics

The portfolio includes Google Analytics 4 integration. To enable:

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add it to your `.env.local` file
4. Deploy your site

## 🎨 Customization Guide

### Changing Colors

The portfolio uses a blue-purple gradient theme. To change colors:

1. Update Tailwind classes in components
2. Modify the gradient classes (`from-blue-400 to-purple-400`)
3. Update hover states and accent colors

### Adding New Sections

1. Create a new component in `/src/components/`
2. Import and add it to `App.jsx`
3. Update navigation in `Header.jsx`
4. Add corresponding link in `Footer.jsx`

### Modifying Animations

Animations are handled by Framer Motion:
- Adjust timing in `transition` properties
- Modify animation types in `initial`, `animate`, and `whileInView`
- Customize easing and delays

## 🔍 SEO Optimization

The portfolio includes:
- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Structured data for better search engine understanding
- Semantic HTML for accessibility

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Loading states
- Success/error messaging
- Responsive design

To connect to a backend service, update the form submission logic in `Contact.jsx`.

## 🛡️ Performance

Optimizations included:
- Lazy loading of images
- Optimized bundle size with Vite
- Efficient re-renders with React
- Minimal CSS with Tailwind's purging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/priyankpahwa/portfolio/issues).

## 📞 Support

If you have any questions or need help with setup:
- Email: priyankpahwa.dev@gmail.com
- LinkedIn: [priyankpahwa](https://linkedin.com/in/priyankpahwa)
- GitHub: [priyankpahwa](https://github.com/priyankpahwa)

---

**Built with ❤️ by Priyank Pahwa**
