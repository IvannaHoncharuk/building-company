# 🏗️ BuildCraft - Construction Company Website

A modern, responsive website for a construction company built with React and Vite.

## ✨ Features

- **Modern Design**: Clean, professional design optimized for construction industry
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and user interactions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading times and smooth user experience
- **SEO Optimized**: Proper meta tags and structured content

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd buildcraft-website
   ```

2. **Install dependencies**

   ```bash
   npm run install-deps
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
buildcraft-website/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/        # SCSS styles
│   │   │   ├── main.scss
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── package.json           # Root package.json
└── README.md             # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run install-deps` - Install frontend dependencies

## 🎨 Components

- **Hero**: Main landing section with call-to-action and statistics
- **About**: Company information and key features
- **Services**: Construction services offered with detailed descriptions
- **Gallery**: Project showcase with filtering options
- **Contact**: Contact form and company information
- **Footer**: Links and company details

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop** (1200px+) - Full layout with all features
- **Tablet** (768px - 1199px) - Adapted layout for medium screens
- **Mobile** (320px - 767px) - Mobile-first design with touch-friendly elements

### Key Responsive Features:

- Mobile navigation menu
- Adaptive grid layouts
- Touch-friendly buttons and forms
- Optimized typography scaling
- Flexible image handling

## 🎯 Performance Features

- **Fast Loading**: Optimized bundle size and lazy loading
- **Smooth Animations**: CSS transitions and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `client/dist`
   - Deploy!

### Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### GitHub Pages

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Select source branch and folder (`client/dist`)

## 🔧 Customization

### Colors

Edit `client/src/styles/_variables.scss` to customize the color scheme:

```scss
$primary-color: #ff6b35;
$primary-dark: #e55a2b;
$bg-primary: #121212;
$bg-secondary: #1a1a1a;
```

### Content

Update component files in `client/src/components/` to modify content:

- `Hero.jsx` - Main landing content
- `About.jsx` - Company information
- `Services.jsx` - Service offerings
- `Gallery.jsx` - Project portfolio
- `Contact.jsx` - Contact information

### Styling

Modify SCSS files in `client/src/styles/` to change the design:

- `main.scss` - Main styles
- `_variables.scss` - Color and spacing variables
- `_mixins.scss` - Reusable style mixins

## 🎨 Design System

### Colors

- **Primary**: Orange (#ff6b35) - Main brand color
- **Background**: Dark (#121212) - Main background
- **Secondary Background**: Dark gray (#1a1a1a) - Section backgrounds
- **Text**: White (#ffffff) - Primary text
- **Secondary Text**: Light gray (#cccccc) - Secondary text

### Typography

- **Font Family**: Inter - Clean, modern sans-serif
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Responsive Scaling**: Automatic font size adjustments

### Components

- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Subtle borders with hover animations
- **Forms**: Clean inputs with validation states
- **Navigation**: Fixed header with smooth scrolling

## 🔍 SEO Features

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Semantic HTML markup
- **Performance**: Fast loading times for better rankings
- **Mobile-Friendly**: Responsive design for mobile indexing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Ivanna Honcharuk**

- GitHub: [@your-username](https://github.com/your-username)

## 🆘 Support

For support or questions:

- Email: info@buildcraft.com
- Phone: +1 (555) 123-4567
- Create an issue in the repository

---

**Note**: This is a frontend-only version optimized for static hosting. For full functionality with contact form processing, you would need to add a backend API or use a form service like Netlify Forms or Formspree.
