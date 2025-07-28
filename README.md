# JoinTheirs

A modern Next.js 15 website with TypeScript integration, Flutterwave payment processing, and serverless architecture for community-driven initiatives.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Flutterwave Payment Integration** with secure transaction handling
- **Serverless Architecture** deployed on Netlify
- **Email Notifications** with MJML templates
- **Responsive Design** with Tailwind CSS
- **State Management** with Zustand
- **Type Safety** with comprehensive TypeScript definitions

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Payment**: Flutterwave V3 API
- **Email**: Resend + EmailJS with MJML templates
- **State**: Zustand for lightweight state management
- **Deployment**: Netlify with serverless functions
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jointheirs.git
   cd jointheirs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables** in `.env.local`:
   - Flutterwave API keys
   - Email service credentials
   - Site configuration

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 15 App Router
├── components/             # Reusable components
│   ├── ui/                # Base UI components
│   ├── forms/             # Form components
│   ├── payment/           # Payment-related components
│   └── layout/            # Layout components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── store/                 # Zustand state management
├── types/                 # TypeScript definitions
└── styles/                # Global styles
```

## 🚀 Deployment

The project is configured for automatic deployment on Netlify:

1. **Connect your GitHub repository** to Netlify
2. **Set environment variables** in Netlify dashboard
3. **Deploy automatically** on every push to main branch

### Environment Variables Required:

```env
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_public_key
FLUTTERWAVE_SECRET_KEY=your_secret_key
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

## 💳 Payment Integration

The payment system uses Flutterwave with a secure architecture:

1. **Client-side payment initiation** using public keys
2. **Server-side verification** via Netlify Functions
3. **Email confirmations** sent automatically
4. **Transaction tracking** with persistent state

## 📧 Email System

Multi-provider email strategy:
- **Resend**: Primary for transactional emails
- **EmailJS**: Secondary for contact forms
- **MJML**: Responsive email templates

## 🔒 Security

- Server-side payment verification
- Environment variable protection
- Security headers configured
- Input validation and sanitization
- Rate limiting on forms

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@jointheirs.com or create an issue in this repository.

## 🗺️ Roadmap

- [ ] Phase 1: Foundation Setup
- [ ] Phase 2: Payment Integration
- [ ] Phase 3: UI/UX Implementation
- [ ] Phase 4: Email System
- [ ] Phase 5: Deployment & Testing

---

Built with ❤️ using Next.js 15 and modern web technologies.