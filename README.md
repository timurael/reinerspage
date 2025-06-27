# LaserCraft Studio - Custom Laser-Cut Wooden Products

A modern, full-featured ecommerce platform for custom laser-cut wooden products with design upload capabilities.

## 🚀 Features

### Core Functionality
- **Custom Design Upload**: Drag & drop interface for uploading designs (PNG, JPG, SVG, PDF)
- **Real-time Preview**: See your design on different wood materials before ordering
- **Material Selection**: Choose from Pine, Birch, Maple, Oak, and Walnut
- **Dynamic Pricing**: Instant price calculation based on dimensions, material, and quantity
- **Shopping Cart**: Persistent cart with quantity management
- **Secure Checkout**: Complete order flow with address and payment forms

### User Management
- **Authentication**: NextAuth.js with email/password and Google OAuth
- **User Accounts**: Profile management and order history
- **Admin Dashboard**: Order management and analytics for administrators

### Technical Features
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Prisma
- **Database**: PostgreSQL with comprehensive schema
- **State Management**: Zustand for cart, React Query for server state
- **Animations**: Framer Motion for smooth transitions
- **Responsive Design**: Mobile-first approach with beautiful UI

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **State Management**: Zustand, React Query
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker, Vercel ready

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <repository>
   cd lasercraft-studio
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local` with:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/lasercraft"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

3. **Set up database**
   ```bash
   npm run db:push
   npm run db:seed  # Optional: add sample data
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Docker Deployment

1. **Using Docker Compose (Recommended)**
   ```bash
   docker-compose up -d
   ```

2. **Manual Docker Build**
   ```bash
   npm run docker:build
   npm run docker:run
   ```

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── design/            # Design upload page
│   ├── cart/              # Shopping cart
│   └── checkout/          # Checkout flow
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   ├── design/            # Design upload components
│   ├── cart/              # Cart components
│   └── checkout/          # Checkout components
├── lib/                   # Utility libraries
├── store/                 # State management
└── types/                 # TypeScript types
```

## 🎨 Design System

The application uses a warm, wood-inspired color palette:
- **Primary**: Orange to Amber gradient (#f97316 to #f59e0b)
- **Backgrounds**: Subtle gradients from orange-50 to yellow-50
- **Typography**: Inter font family for clean readability
- **Components**: Consistent spacing, rounded corners, and subtle shadows

## 🔐 Authentication

- Email/password authentication with bcrypt hashing
- Google OAuth integration
- Role-based access control (USER/ADMIN)
- Protected routes with middleware
- Session management with NextAuth.js

## 💳 Order Flow

1. **Design Upload**: User uploads custom design
2. **Customization**: Select material, dimensions, quantity
3. **Preview**: Real-time preview on chosen material
4. **Add to Cart**: Persistent cart with pricing
5. **Checkout**: Shipping and payment information
6. **Order Processing**: Admin dashboard for fulfillment

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Stripe (future implementation)
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Docker Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Server
```bash
npm run build
npm start
```

## 📊 Admin Features

The admin dashboard provides:
- Order management and fulfillment tracking
- Customer information and order history
- Revenue and sales analytics
- Product management capabilities
- Real-time statistics and insights

## 🔮 Future Enhancements

- Real-time order tracking
- Advanced design editor
- Multiple payment providers
- Inventory management
- Email notifications
- Review and rating system
- Bulk ordering for businesses
- Mobile app

## 📄 License

This project is for demonstration purposes. Commercial use requires proper licensing for all dependencies and assets.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🐛 Known Issues

- Design preview is currently a simulation (integrate with actual laser cutting preview)
- Payment processing is demo mode (integrate with Stripe Elements)
- File upload needs cloud storage integration
- Email notifications not implemented

---

Built with ❤️ for the maker community