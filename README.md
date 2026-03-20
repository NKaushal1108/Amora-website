# AMORA Photography Portfolio Website

A beautiful, modern photography portfolio website for AMORA by Amisha Perera, built with React.js.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, elegant design with a light beige background and gold accents
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Contact Form**: Functional contact form with validation
- **Gallery Section**: Showcase of photography work
- **About Section**: Information about the photographer
- **Social Media Integration**: Links to social media platforms

## Sections

1. **Header**: Logo and navigation menu
2. **Hero Section**: Image grid showcasing featured work
3. **Intro Text**: Introduction and mission statement
4. **Image Banners**: Full-width horizontal image displays
5. **Gallery**: Portfolio grid with multiple images
6. **About Us**: Information about the photographer with social media links
7. **Contact Us**: Contact information and contact form
8. **Footer**: Additional contact info and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Adding Images

Replace the placeholder divs in the components with actual image tags:

```jsx
// Instead of:
<div className="image-placeholder">...</div>

// Use:
<img src="/path/to/image.jpg" alt="Description" />
```

### Updating Contact Information

Edit the contact details in `src/components/ContactUs.js` and `src/components/Footer.js`.

### Changing Colors

The main color scheme is defined in the CSS files:
- Background: `#F5F5DC` (light beige)
- Accent: `#D4AF37` (gold)
- Text: `#2C2C2C` (dark gray)

## Technologies Used

- React.js 18.2.0
- CSS3
- Google Fonts (Playfair Display, Inter)

## License

Copyright © 2024 Amisha Perera Photography.
