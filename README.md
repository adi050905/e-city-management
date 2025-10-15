# E-City Management Dashboard 🌆

A futuristic, ultra-intuitive digital twin interface for smart city management. Built with React, TypeScript, and modern web technologies, featuring glassmorphism design and real-time data visualization.

![E-City Dashboard](./preview.png)

## ✨ Features

### 🎨 Design Philosophy
- **Futuristic Glassmorphism UI** - Inspired by Apple VisionOS, Tesla interface, and sci-fi city simulations
- **Soft-Glow Aesthetics** - Neon accents (cyan, emerald, purple) with smooth animations
- **Cognitive Clarity** - No clutter, intuitive layouts, contextual tooltips
- **Full Dark/Light Mode** - Adaptive theme system with smooth transitions
- **Mobile Responsive** - Works seamlessly across all devices

### 👥 User Roles
1. **Citizen** - View city status, report issues, track requests, check events
2. **Administrator** - Monitor real-time dashboards, manage users, approve issues
3. **Service Provider** - View assigned tasks and KPIs (placeholder)

### 🚀 Key Capabilities
- ✅ Role-based authentication with mock login
- ✅ Real-time city metrics (traffic, energy, water, air quality)
- ✅ Interactive dashboards with data visualization
- ✅ Issue reporting system
- ✅ Notification center with filtering
- ✅ City events calendar
- ✅ Smooth page transitions with Framer Motion
- ✅ Modular component architecture

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3 + TypeScript 5.3 |
| **Build Tool** | Vite 5.1 |
| **Styling** | TailwindCSS 3.4 + Custom Glassmorphism |
| **State Management** | Zustand 4.5 |
| **Routing** | React Router 6.22 |
| **Animations** | Framer Motion 11.0 |
| **Charts** | Recharts 2.12 |
| **Icons** | Lucide React 0.344 |
| **Form Handling** | React Hook Form 7.50 + Yup 1.3 |

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/          
│   ├── auth/           # ProtectedRoute
│   ├── common/         # Button3D, WidgetCard, DataCard, NotificationPanel
│   └── layout/         # Sidebar, Topbar, DashboardLayout
├── pages/
│   ├── auth/           # LoginPage, RegisterPage
│   ├── admin/          # AdminDashboard
│   └── user/           # UserDashboard
├── hooks/              # Custom React hooks
├── store/              # Zustand stores (auth, theme, notifications)
├── utils/              # Helpers, design tokens, mock data
├── types/              # TypeScript definitions
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles + Tailwind
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```powershell
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```

4. **Build for production**
   ```powershell
   npm run build
   ```

5. **Preview production build**
   ```powershell
   npm run preview
   ```

## 🎮 Usage

### Demo Login
The app uses mock authentication. You can login with:
- **Any email and password**
- Select **Citizen** or **Admin** role before logging in
- Each role provides different dashboard views and capabilities

### Admin Features
- Real-time city metrics dashboard
- Traffic congestion monitoring (24h charts)
- Energy consumption analytics
- Water quality tracking
- Active issue reports management
- City health metrics overview

### Citizen Features
- Personal dashboard with city status
- Report issues (street lights, traffic, environment)
- View personal report history
- Upcoming city events
- Quick action shortcuts
- Air quality and utility metrics

## 🎨 Design Tokens

### Color Palette
```javascript
{
  primary: {
    cyan: '#00D9FF',      // Neon blue - primary interactive
    emerald: '#00FFB3',   // Success states
    purple: '#B77FFF',    // Secondary accents
    pink: '#FF6EC7',      // Tertiary accents
  },
  status: {
    safe: '#00FFB3',      // Green - optimal
    warning: '#FFB800',   // Amber - attention
    critical: '#FF3B30',  // Red - urgent
    info: '#00D9FF',      // Cyan - informational
  }
}
```

### Typography
- **Font Family**: Inter (primary), SF Pro Display, JetBrains Mono
- **Sizes**: 12px - 48px with fluid scaling
- **Weights**: 300 (light) to 800 (extrabold)

### Animations
- **Durations**: 150ms (fast), 300ms (normal), 500ms (slow)
- **Easing**: Custom cubic-bezier curves for smooth motion
- **Effects**: Glow, float, fade, slide, pulse

## 🔧 Configuration

### Theme Customization
Edit `tailwind.config.js` to modify:
- Color schemes
- Typography scales
- Spacing system
- Animation keyframes
- Custom utilities

### Mock Data
Replace mock data in `src/utils/mockData.ts` with real API calls.

### API Integration
Update Zustand stores in `src/store/` to connect to backend:
- `authStore.ts` - Authentication endpoints
- `notificationStore.ts` - WebSocket or polling for real-time updates

## 📊 Component Library

### Core Components

#### Button3D
Futuristic button with 3D effect and variants
```tsx
<Button3D variant="primary" size="lg" glow>
  Click Me
</Button3D>
```

#### WidgetCard
Glass-morphic container for dashboard widgets
```tsx
<WidgetCard title="Traffic" icon={Activity} status="safe">
  <YourContent />
</WidgetCard>
```

#### DataCard
Metric display with trend indicators
```tsx
<DataCard 
  label="Air Quality" 
  value={42} 
  unit="AQI"
  trend="down"
  status="safe"
/>
```

## 🔐 Security Notes
⚠️ **Current implementation uses mock authentication for demonstration purposes.**

For production:
1. Implement secure backend authentication
2. Use JWT tokens with proper expiration
3. Add HTTPS encryption
4. Implement CSRF protection
5. Sanitize all user inputs
6. Add rate limiting

## 🚧 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] 3D city map visualization
- [ ] Advanced analytics dashboard
- [ ] Multi-language support (i18n)
- [ ] Accessibility improvements (WCAG 2.1 AA)
- [ ] Progressive Web App (PWA) features
- [ ] User profile management
- [ ] Advanced reporting with filters
- [ ] Export data to CSV/PDF
- [ ] Mobile app with React Native

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with React and TypeScript rules
- **Formatting**: Use Prettier (recommended)
- **Comments**: Include UX reasoning for complex interactions
- **Components**: Functional components with TypeScript interfaces

## 📄 License

MIT License - feel free to use this project for learning or production.

## 🙏 Acknowledgments

- Design inspiration: Apple VisionOS, Tesla UI, Arc Browser, SimCity
- Icons: Lucide React
- Charts: Recharts
- State Management: Zustand
- Animation: Framer Motion

---

**Built with ❤️ for the future of smart cities**

For questions or support, open an issue on GitHub.
