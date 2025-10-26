# 🚀 Sarweshwaran R S - Portfolio

A modern, responsive portfolio website showcasing my journey as a Software Engineer and AI Researcher. Built with Angular and Node.js, featuring a clean design, smooth animations, and full-width gradient backgrounds.

## ✨ Features

### 🎨 Design & UI
- **Modern Minimalistic Design** - Clean white navbar with smooth hover effects
- **Full-Width Gradients** - Beautiful gradient backgrounds spanning entire viewport
- **Responsive Layout** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Professional Favicon** - Custom-designed icon representing software development and AI

### 📱 Sections
- **Hero Section** - Introduction with profile image and social links
- **About** - Detailed background and expertise
- **Education** - Academic qualifications and achievements
- **Skills** - Technical skills organized by categories (Languages, Frameworks, Cloud, Tools)
- **Publications** - AI research publications with detailed descriptions
- **Projects** - Featured projects with GitHub integration
- **Contact** - Interactive contact form with validation

### 🔧 Technical Features
- **GitHub Integration** - Dynamically fetches pinned repositories
- **Contact Form** - Backend API for handling contact submissions
- **Firebase Hosting** - Fast, reliable deployment
- **Mobile-First Design** - Responsive across all devices
- **SEO Optimized** - Proper meta tags and structure

## 🏗️ Architecture

### Frontend (Angular 20.3.0)
```
frontend/
├── src/
│   ├── app/
│   │   ├── pages/           # Main sections (about, skills, projects, etc.)
│   │   ├── shared/          # Reusable components and services
│   │   └── footer/          # Footer component
│   ├── assets/              # Images, fonts, and static files
│   └── styles.css           # Global styles
├── public/                  # Static assets and favicon
└── firebase.json           # Firebase hosting configuration
```

### Backend (Node.js + Express)
```
backend/
├── controllers/             # Business logic
├── routes/                  # API endpoints
├── services/               # External service integrations
├── github/                 # GitHub API integration
├── config/                 # Configuration files
└── server.js              # Main server file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarweshwaran-rs/portfolio.git
   cd portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Configuration**
   ```bash
   # In backend directory
   cp .env.example .env
   # Add your environment variables
   ```

### Development

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   # Server runs on http://localhost:3000
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # App runs on http://localhost:4200
   ```

3. **Open your browser**
   Navigate to `http://localhost:4200`

## 📦 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
# Builds to dist/ directory
```

### Backend Production
```bash
cd backend
npm start
# Runs production server
```

### Firebase Deployment
```bash
cd frontend
npm run build
firebase deploy
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 20.3.0
- **UI Library**: Angular Material
- **Styling**: CSS3 with custom animations
- **Build Tool**: Angular CLI
- **Deployment**: Firebase Hosting

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **APIs**: GitHub API, Google APIs
- **Database**: Firebase (for contact forms)
- **Authentication**: Firebase Admin SDK

### Development Tools
- **Version Control**: Git
- **Code Editor**: VS Code
- **Package Manager**: npm
- **Containerization**: Docker (optional)

## 🎯 API Endpoints

### Contact API
- `POST /api/contact/submit` - Submit contact form
  ```json
  {
    "personname": "John Doe",
    "email": "john@example.com",
    "linkedinurl": "https://linkedin.com/in/johndoe"
  }
  ```

### GitHub Integration
- `GET /api/github/pinned` - Fetch pinned repositories
  ```json
  [
    {
      "name": "Anarix_Task",
    "description": "This is the Challenge Provided  Anarix: Task is to Create an AI Agent which answers to the question's from the E-Commerce Data",
    "url": "https://github.com/sarweshwaran-rs/Anarix_Task",
    "stars": 1,
    "forks": 0,
    "isFork": false,
    "owner": "sarweshwaran-rs",
    "ownerUrl": "https://github.com/sarweshwaran-rs",
    "viewerPermission": "ADMIN",
    "viewerHasStarred": true,
    "contributionStatus": "Owned",
    "topics": []
    }
  ]
  ```

## 📱 Responsive Design

The portfolio is fully responsive with specific breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile Large**: 480px - 767px
- **Mobile Small**: 320px - 479px

Special attention to:
- Navigation menu transforms to hamburger on mobile
- Skill cards adapt grid layout based on screen size
- Publication cards stack vertically on smaller screens
- Contact form optimizes for touch interaction

## 🎨 Design System

### Colors
- **Primary**: #4B88D0 (Blue)
- **Secondary**: #357AC8 (Darker Blue)
- **Background**: White with subtle gradients
- **Text**: #333 (Dark Gray)
- **Accent**: Various gradient combinations

### Typography
- **Font Family**: Inter (Primary), Courier New (Code)
- **Headings**: 700 weight
- **Body**: 400-500 weight
- **Code**: Monospace for animated role text

## 🔧 Configuration

### Environment Variables (Backend)
```env
PORT=3000
FIREBASE_PROJECT_ID=your-project-id
GITHUB_TOKEN=your-github-token
```

### Firebase Configuration
Update `frontend/.firebaserc` with your project ID:
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Sarweshwaran R S**
- Portfolio: [Live Demo](https://your-portfolio-url.com)
- GitHub: [@sarweshwaran-rs](https://github.com/sarweshwaran-rs)
- LinkedIn: [sarweshwaranrs](https://linkedin.com/in/sarweshwaranrs)
- Email: sarweshwaranrs.dev@gmail.com
---

⭐ **Star this repository if you found it helpful!**