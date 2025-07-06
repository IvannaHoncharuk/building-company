# Development Guide

## Project Structure Overview

### Frontend (client/)

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Page components
│   │   └── Home.jsx
│   ├── styles/        # SCSS stylesheets
│   │   └── main.scss
│   ├── utils/         # Utility functions
│   │   ├── api.js     # API utilities
│   │   └── validation.js # Form validation
│   ├── assets/        # Static assets
│   │   └── images/    # Image files
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Application entry point
├── public/            # Public assets
├── package.json       # Frontend dependencies
├── vite.config.js     # Vite configuration
└── .eslintrc.cjs      # ESLint configuration
```

### Backend (server/)

```
server/
├── config/           # Configuration files
│   ├── database.js   # Database configuration
│   ├── email.js      # Email configuration
│   └── middleware.js # Middleware configuration
├── controllers/      # Route controllers
│   └── contactController.js
├── models/          # MongoDB models
│   └── Contact.js
├── routes/          # API routes
│   └── contact.js
├── utils/           # Utility functions
│   └── email.js
├── server.js        # Main server file
└── package.json     # Backend dependencies
```

## Development Workflow

### 1. Setting Up Development Environment

```bash
# Clone the repository
git clone https://github.com/IvannaHoncharuk/buildcraft-website.git
cd buildcraft-website

# Install all dependencies
npm run install-all

# Create environment file
cp env.example .env
# Edit .env with your configuration
```

### 2. Running the Application

#### Development Mode (Both Frontend and Backend)

```bash
npm run dev
```

#### Frontend Only

```bash
npm run client
```

#### Backend Only

```bash
npm run server
```

### 3. Code Organization Best Practices

#### Frontend Components

- Keep components small and focused
- Use relative imports: `import Component from '../components/Component'`
- Place reusable components in `src/components/`
- Place page-level components in `src/pages/`
- Use SCSS for styling with BEM methodology

#### Backend Structure

- Keep controllers thin, move business logic to services if needed
- Use middleware for common functionality
- Validate input data in controllers
- Use environment variables for configuration
- Implement proper error handling

### 4. API Development

#### Adding New Endpoints

1. Create controller in `server/controllers/`
2. Create route in `server/routes/`
3. Add route to main server file
4. Update API utilities in `client/src/utils/api.js`

#### Example: Adding a new service endpoint

```javascript
// server/controllers/serviceController.js
exports.getAllServices = async (req, res) => {
  // Implementation
};

// server/routes/services.js
router.get("/", serviceController.getAllServices);

// server/server.js
app.use("/api/services", serviceRoutes);

// client/src/utils/api.js
export const serviceAPI = {
  getAll: () => api.get("/services"),
};
```

### 5. Database Development

#### Adding New Models

1. Create model in `server/models/`
2. Add validation and indexes
3. Create controller methods
4. Add routes

#### Example: Adding a Project model

```javascript
// server/models/Project.js
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // ... other fields
});

// server/controllers/projectController.js
exports.createProject = async (req, res) => {
  // Implementation
};

// server/routes/projects.js
router.post("/", projectController.createProject);
```

### 6. Styling Guidelines

#### SCSS Structure

```scss
// Variables
$primary-color: #ff6b35;
$secondary-color: #1a1a1a;

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Components
.component {
  @include flex-center;
  color: $primary-color;
}
```

#### Responsive Design

- Mobile-first approach
- Use CSS Grid and Flexbox
- Test on multiple devices
- Use relative units (rem, em, %)

### 7. Testing

#### Frontend Testing

```bash
# Run linting
npm run lint

# Run tests (when implemented)
npm run test
```

#### Backend Testing

```bash
# Run tests (when implemented)
cd server && npm test
```

### 8. Environment Variables

#### Required Variables

```bash
# Server
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/buildcraft

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=admin@buildcraft.com

# Security
JWT_SECRET=your-jwt-secret-key
SESSION_SECRET=your-session-secret

# Frontend
VITE_API_URL=http://localhost:5000/api
```

### 9. Deployment

#### Frontend Deployment

```bash
cd client
npm run build
# Deploy dist/ folder to your hosting service
```

#### Backend Deployment

```bash
cd server
npm start
# Deploy to your hosting service (Heroku, Vercel, etc.)
```

### 10. Common Issues and Solutions

#### MongoDB Connection Issues

- Ensure MongoDB is running
- Check connection string in .env
- Verify network connectivity

#### Email Not Sending

- Check SMTP credentials
- Verify Gmail App Password
- Check firewall settings

#### CORS Issues

- Verify ALLOWED_ORIGINS in .env
- Check frontend URL matches backend config
- Ensure credentials are properly set

#### Build Issues

- Clear node_modules and reinstall
- Check for missing dependencies
- Verify import paths

### 11. Performance Optimization

#### Frontend

- Use React.memo for expensive components
- Implement lazy loading for routes
- Optimize images and assets
- Use code splitting

#### Backend

- Implement caching strategies
- Optimize database queries
- Use compression middleware
- Monitor memory usage

### 12. Security Best Practices

#### Frontend

- Validate input on client side
- Sanitize user data
- Use HTTPS in production
- Implement proper error handling

#### Backend

- Validate all input data
- Use environment variables for secrets
- Implement rate limiting
- Use security headers
- Sanitize database queries

## Contributing

1. Create a feature branch
2. Follow the coding standards
3. Write tests for new features
4. Update documentation
5. Submit a pull request

## Support

For development questions, create an issue in the repository or contact the development team.
