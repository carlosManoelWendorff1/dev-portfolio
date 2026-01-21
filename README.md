# Carlos Wendorff - Developer Portfolio

A modern, responsive developer portfolio built with Next.js 14, featuring internationalization, dark theme, and interactive UI components.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC)

## 🚀 Features

### **Core Features**

- 🌐 **Internationalization** (English/Portuguese) with dynamic language switching
- 🌙 **Dark Theme** with gradient accents and glassmorphism effects
- 📱 **Fully Responsive** design for all device sizes
- ⚡ **High Performance** with Next.js 14 App Router
- 🎨 **Modern UI** with Shadcn/ui components

### **Sections**

- **Hero Section** - Animated introduction with floating elements
- **Expertise** - Skills showcase with interactive cards
- **Projects** - Portfolio grid with hover effects and live demos
- **Experience** - Professional timeline with accordion details
- **Contact** - Form with EmailJS integration and social links

### **Technical Highlights**

- **Framer Motion** for smooth animations
- **EmailJS** for contact form functionality
- **Lucide React** for consistent icons
- **Custom Hooks** for scroll detection and state management
- **Component-based Architecture** with reusable UI components

## 🛠️ Tech Stack

| Technology                      | Purpose                         |
| ------------------------------- | ------------------------------- |
| **Next.js 14**                  | React framework with App Router |
| **TypeScript**                  | Type-safe development           |
| **Tailwind CSS**                | Utility-first styling           |
| **Shadcn/ui**                   | Accessible UI components        |
| **Framer Motion**               | Animations and transitions      |
| **EmailJS**                     | Email service integration       |
| **Lucide React**                | Icon library                    |
| **React Intersection Observer** | Scroll animations               |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm/bun

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/carlosManoelWendorff1/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Adding New Projects

Edit `/i18n/dictionary.ts`:

```typescript
projects: {
  items: [
    {
      id: 1,
      title: "Project Name",
      type: "Project Type",
      image: "/projects/image.jpg",
      link: "https://project-link.com",
      demo: true,
    },
  ];
}
```

### Adding Translation Keys

```typescript
// In dictionary.ts
pt: {
  newSection: {
    title: "Título em Português",
    description: "Descrição em Português"
  }
},
en: {
  newSection: {
    title: "Title in English",
    description: "Description in English"
  }
}
```

### Customizing Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        cyan: '#00ffff',
        purple: '#9b37ff',
      }
    }
  }
}
```

## 📦 Available Scripts

| Script           | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Build for production     |
| `npm start`      | Start production server  |
| `npm run lint`   | Run ESLint               |
| `npm run format` | Format with Prettier     |

## 🎨 Design Features

### **Color Palette**

- Primary: `#00ffff` (Cyan) - `#9b37ff` (Purple)
- Background: `#0b1220` (Dark Blue)
- Text: `#ffffff` with opacity variants
- Accents: Gradient overlays and glass effects

### **Typography**

- **Inter** - Primary sans-serif font
- **JetBrains Mono** - Monospace for code elements

### **Animations**

- Scroll-triggered fade-ins
- Hover scale and glow effects
- Smooth page transitions
- Floating particle effects

## 📱 Responsive Breakpoints

| Device  | Breakpoint     | Columns   |
| ------- | -------------- | --------- |
| Mobile  | < 768px        | 1 column  |
| Tablet  | 768px - 1024px | 2 columns |
| Desktop | > 1024px       | 3 columns |

## 🔗 External Services

### **EmailJS Setup**

1. Create free account at [EmailJS](https://www.emailjs.com/)
2. Add email service (Gmail/Outlook)
3. Create email template
4. Copy Service ID, Template ID, and Public Key
5. Add to `.env.local`

### **Deployment**

This portfolio is optimized for deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/carlosManoelWendorff1/portfolio)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icons

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Carlos Manoel Wendorff - [carlosmwendorff@gmail.com](mailto:carlosmwendorff@gmail.com)

Project Link: [https://github.com/carlosManoelWendorff1/portfolio](https://github.com/carlosManoelWendorff1/portfolio)

---

⭐ Star this repo if you found it useful!

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
