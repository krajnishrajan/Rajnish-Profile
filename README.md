# Rajnish Rajan - Portfolio Website

A modern, responsive portfolio website showcasing professional profile, projects, skills, and services. Built with HTML, CSS, and JavaScript with interactive features and animations.

## 📁 Project Structure

```
my-portfolio/
├── index.html          # Main HTML file with page structure
├── script.js           # JavaScript for interactivity and animations
├── style.css           # CSS styling and responsive design
├── cv.pdf              # Downloadable CV/Resume
├── my Photo.png        # Profile picture
└── README.md           # Project documentation
```

## 📄 Files Overview

### index.html
The main HTML file containing:
- **Navigation Bar**: Section navigation with Home, About, Projects, Services, and Contact
- **Header Section**: Profile image, introduction, and social media links
- **Sections**: Multiple content sections including about, projects, services, and contact form
- **Features**:
  - Animated background elements
  - Floating particles effect
  - Mobile-responsive design
  - Modal for contact form success messages
  - Social media links (LinkedIn, GitHub, Instagram, Facebook)
  - Call-to-action buttons (Hire Me, Download CV)
  - Location badge

### script.js
JavaScript functionality providing:
- **Floating Particles**: Generates 100 animated particles for visual effect
- **EmailJS Integration**: Handles contact form submissions with email notifications
- **Modal Management**: Shows success/error messages after form submission
- **Section Navigation**: Smooth section switching with scroll management
- **Mobile Menu**: Toggle menu for responsive navigation on mobile devices
- **Event Listeners**: Handles user interactions and responsive behavior
- **Features**:
  - Particle animation with random positions and durations
  - Mobile menu toggle functionality
  - Auto-close mobile menu when navigating or clicking outside
  - Smooth scrolling between sections
  - Background scroll prevention when modal is open

### style.css
Comprehensive CSS styling featuring:
- **Design System**:
  - CSS Variables for colors, gradients, shadows, and transitions
  - Primary colors: Blue (#2563eb), Indigo (#4f46e5), Cyan (#0ea5e9)
  - Dark theme with light text
  
- **Components**:
  - Animated background gradients
  - Floating particle effects
  - Navigation bar with active states
  - Responsive buttons (primary and secondary)
  - Success modal styling
  - Mobile-responsive layout
  - Code pattern background
  
- **Responsive Design**:
  - Clamp() functions for fluid typography
  - Mobile-first approach
  - Media queries for tablet and desktop
  - Touch-friendly interface elements

## 🎨 Key Features

✨ **Modern Design**
- Animated gradient background
- Floating particle effects
- Smooth transitions and animations
- Professional color scheme

📱 **Fully Responsive**
- Mobile-first design
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

🚀 **Interactive**
- Smooth section navigation
- Contact form with email integration
- Success/error modals
- Hover effects and animations

🔗 **Social Integration**
- LinkedIn profile link
- GitHub profile link
- Instagram profile
- Facebook profile
- Contact form via EmailJS

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and gradients
- **JavaScript (Vanilla)**: Pure JavaScript with no framework dependencies

### External Libraries & CDNs
- **FontAwesome** (v6.4.0): Icon library for UI icons
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
  
- **EmailJS** (v3): Email service for contact form submissions
  - CDN: `https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js`
  - Service ID: `service_inb12sv`
  - Template ID: `template_t7p7vuj`

### CSS Features & Techniques
- **CSS Variables**: Dynamic theming with custom properties
- **CSS Grid & Flexbox**: Responsive layout system
- **CSS Animations**: `@keyframes` for particle effects and transitions
- **Clamp Function**: Fluid typography and spacing
- **Gradients**: Linear and radial gradients for backgrounds
- **Media Queries**: Mobile-first responsive design
- **Box Shadows**: Depth and elevation effects
- **Transitions**: Smooth `cubic-bezier` timing functions

### JavaScript Functions

#### DOM Manipulation
- `document.getElementById()`: Select elements by ID
- `document.querySelectorAll()`: Select multiple elements
- `document.querySelector()`: Select single element
- `document.createElement()`: Create new DOM elements
- `addEventListener()`: Attach event listeners
- `classList.add() / remove() / toggle()`: Manage CSS classes

#### Custom Functions

**Particle System**
- Particle creation loop (100 particles with random properties)
- Random animation durations: `Math.random() * 5 + 3`
- Random delays: `Math.random() * 2`

**Modal Management**
- `showModal(message)`: Display success/error messages
  - Sets modal content
  - Prevents background scroll
  - Auto-displays with customizable messages
  
- `closeModal()`: Hide modal and restore scrolling
  - Removes modal display
  - Restores body overflow

**Navigation & Section Switching**
- `switchSection(targetId)`: Navigate between page sections
  - Updates active nav button
  - Removes active class from other sections
  - Smooth scroll to top: `window.scrollTo({ top: 0, behavior: 'smooth' })`
  - Auto-closes mobile menu on section change
  - Handles responsive breakpoint (768px)

**Mobile Menu**
- `handleResize()`: Responsive menu handler
  - Resets menu state on window resize
  - Manages menu visibility for desktop

**Contact Form**
- `sendReview()`: Submit contact form via EmailJS
  - Form validation for all fields
  - Email validation with regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Prepares template parameters
  - Sends email through EmailJS service
  - Shows success/error modals
  - Resets form after submission
  - Triggers celebration effect

- `validateEmail(email)`: Email format validation
  - Regex pattern matching
  - Returns boolean validation result

- `getCommentTypeText(type)`: Converts comment type codes to readable text
  - Maps: hire, project, collab, question, other

**UI Feedback**
- `showStatus(message, type)`: Display temporary status messages
  - Sets message content
  - Applies CSS class based on type (success/error)
  - Auto-hides after 5 seconds

**Celebration Effect**
- `createCelebration()`: Confetti animation on successful submission
  - Creates 50 confetti particles
  - Random colors from palette: `['#2563eb', '#4f46e5', '#0ea5e9', '#60a5fa', '#8b5cf6']`
  - Animation: `confettiFall` keyframe with rotation
  - Dynamically creates CSS animation if not exists

#### Event Listeners
- Navigation button click handlers
- Mobile menu toggle
- "Hire Me" button click (routes to contact form)
- Modal close on background click
- Window resize listener
- Smooth scroll for anchor links: `querySelectorAll('a[href^="#"]')`
- Touch prevention for mobile zoom

#### Initialization
- `DOMContentLoaded` event: Initialize on page load
  - Add resize listener
  - Prevent double-tap zoom
  - Add mobile menu CSS dynamically
  - Setup smooth scroll anchors

### Design System (CSS Variables)
```css
--primary-color: #2563eb       /* Blue */
--secondary-color: #4f46e5     /* Indigo */
--accent-color: #0ea5e9        /* Cyan */
--dark-color: #1e293b          /* Dark slate */
--light-color: #f8fafc         /* Light slate */
--success-color: #10b981       /* Green */
--gradient: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)
--shadow: 0 10px 30px rgba(0, 0, 0, 0.1)
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

## 📧 Contact Integration

The portfolio uses **EmailJS** to handle contact form submissions:
- Messages are sent directly to your email
- Automatic success notifications
- 24-hour response time message

## 🚀 Getting Started

1. Open `index.html` in a web browser
2. Update social media links with your profiles
3. Add your profile photo as `my Photo.png`
4. Customize content in the respective sections
5. Update EmailJS service ID if needed

## 📋 Sections Included

- **Home**: Introduction and quick links
- **About**: Professional background and skills
- **Projects**: Showcase of completed work
- **Services**: Skills and services offered
- **Contact**: Contact form for inquiries

## 🎯 Future Enhancements

- Add project details and case studies
- Implement dark/light theme toggle
- Add blog section
- Enhance mobile menu animations
- Add testimonials section

## 📝 Notes

- All external resources use CDN links (FontAwesome, EmailJS)
- CSS uses modern features (CSS Variables, clamp(), grid)
- JavaScript is vanilla (no frameworks required)
- Fully accessible with ARIA labels and semantic HTML

---

**Author**: Rajnish Rajan  
**Based in**: Delhi, India  
**Contact**: 9821990310
**Email**:  krajnishrajan@gmail.com