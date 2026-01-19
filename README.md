# StrategicConsult - Business Consulting Landing Page

A modern, responsive landing page for a strategic business consulting firm built with React and Tailwind CSS.

## 🌟 Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Glassmorphism Effects** - Contemporary glass-like navigation and UI elements
- **Interactive Components** - Hover effects, smooth scrolling, and dynamic interactions
- **Contact Form** - Functional contact form with validation
- **Social Media Integration** - Links to Facebook, Twitter, LinkedIn, and Instagram

## 🎨 Design Highlights

- Hero section with background image and gradient overlay
- Dynamic statistics counter section
- Service cards with detailed features
- 5-step process visualization
- Client testimonials with ratings
- Modern contact section with form
- Professional footer with multiple sections

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful & consistent icon library
- **Custom CSS** - Additional glassmorphism and gradient effects

## 📋 Sections

1. **Navigation** - Fixed glassmorphic navbar with smooth scrolling
2. **Hero** - Eye-catching hero section with CTA buttons and trust indicators
3. **Stats** - Key metrics and achievements
4. **Services** - Three main service offerings with detailed features
5. **Process** - 5-step methodology visualization
6. **Testimonials** - Client success stories and reviews
7. **Contact** - Contact information and inquiry form
8. **Footer** - Company info, quick links, and social media

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/strategic-consult.git
cd strategic-consult
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Required Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.0"
}
```

## 🎨 Customization

### Colors

The site uses a primary color scheme that can be customized in your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... add more shades
          600: '#2563eb',
          // ... etc
        }
      }
    }
  }
}
```

### Content

Edit the following arrays in the component to customize content:

- `navItems` - Navigation menu items
- `services` - Service offerings
- `processSteps` - Process methodology
- `testimonials` - Client reviews
- `stats` - Company statistics

### Images

Replace placeholder images with your own:

- Hero background: `/hero-bg.png`
- Logo: `/logo.svg`
- Client avatars: Update URLs in testimonials section

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Glassmorphism Effect

```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
```

### Custom Animations

- Hover scale effects on buttons and cards
- Smooth color transitions
- Fade-in animations on scroll
- Interactive icon transformations

## 📧 Contact Form

The contact form includes:
- Name field validation
- Email validation
- Message textarea
- Submit handler (currently logs to console)

To integrate with a backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // Replace with your API endpoint
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

## 🔧 Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@strategicconsult.com or join our Slack channel.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Avatar images from [Pravatar](https://pravatar.cc/)

---

**Built with ❤️ for modern businesses**