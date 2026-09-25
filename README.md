# 🛒 Techno Shop

A Persian-language electronics storefront built with Next.js App Router, Prisma, and NextAuth, providing product browsing, credential and mobile/OTP authentication, and a themeable UI.

Built with a route-group architecture (`(auth)` / `(root)`), Server Actions for data mutations, and a SQLite database through Prisma.

---

## ✨ Features

- 🔐 Credential Authentication — email + password login via NextAuth
- 📱 Mobile / OTP Login — sign-in flow based on mobile number and OTP verification
- 📝 Sign Up — new user registration with hashed passwords (bcrypt)
- 🛍️ Product Catalog — home page listing the latest products
- 🔎 Product Details — dynamic product pages by slug (`/product/[slug]`)
- 🗂️ Categorized Products — seeded with mobile, laptop, and headphone categories
- 🎨 Theme Toggle — light/dark mode via `next-themes`
- 🧩 UI Kit — shadcn/ui + Radix UI components (button, card, badge, dropdown, input, label)
- 📑 Schema Validation — request and form validation using `zod`
- 🗄️ SQLite Database — relational storage through Prisma with the `better-sqlite3` driver
- 🌱 Database Seeding — sample products and users via a seed script

---

## 🛠️ Tech Stack

| Layer          | Technology                          |
| -------------- | ------------------------------------ |
| Framework      | Next.js 16 (App Router)             |
| Language       | TypeScript                          |
| UI             | React 19, Tailwind CSS 4             |
| Components     | shadcn/ui + Radix UI, lucide-react   |
| Database       | SQLite                              |
| ORM            | Prisma 7 (`@prisma/adapter-better-sqlite3`) |
| Authentication | NextAuth v5 (beta) + Prisma Adapter |
| Password Hashing | bcrypt                             |
| Validation     | zod                                  |
| HTTP Client    | axios (OTP provider requests)       |
| Theming        | next-themes                          |
| Code Quality   | ESLint                               |

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```
git clone https://github.com/AliMoradpour/techno-shop.git
cd techno-shop
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
DATABASE_URL=
AUTH_SECRET=
```

Configure `DATABASE_URL` for the SQLite connection and `AUTH_SECRET` for NextAuth session/JWT signing before starting the application.

### Database Setup

Generate the Prisma client and apply migrations:

```
npx prisma generate
npx prisma migrate dev
```

Seed the database with sample products and users:

```
npm run seed
```

### Development

```
npm run dev
```

The application runs on:

```
http://localhost:3000
```

### Production

Build the application:

```
npm run build
```

Then start the production build:

```
npm run start
```

---

## 📡 Server Actions & Routes

Instead of a traditional REST API, data mutations are handled through Next.js Server Actions.

### Authentication

| Action / Route                          | Description                                   |
| ---------------------------------------- | ---------------------------------------------- |
| `signInWithCredentials` (Server Action)  | Email/password sign-in                         |
| `signUpUser` (Server Action)             | Registers a new user and signs them in         |
| `signOutUser` (Server Action)            | Signs the current user out                     |
| `findMobile` (Server Action)             | Checks whether a mobile number is registered   |
| `OTP` (Server Action)                    | Requests an OTP code for a mobile number       |
| `GET/POST /api/auth/[...nextauth]`       | NextAuth route handler                         |

### Products

| Action (Server Action)   | Description                          |
| ------------------------ | -------------------------------------- |
| `getLatestProducts`      | Returns the 4 most recently added products |
| `getProductBySlug`       | Returns a single product by its slug   |

### Pages

| Route                | Description                     |
| --------------------- | -------------------------------- |
| `/`                   | Home page — latest products      |
| `/product/[slug]`     | Product detail page               |
| `/sign-in`            | Email/password sign-in form      |
| `/sign-up`            | Registration form                 |
| `/otp`                | Mobile OTP verification form      |

---

## 📁 Project Structure

```
techno-shop/
├── app/
│   ├── (auth)/
│   │   ├── otp/
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   └── layout.tsx
│   ├── (root)/
│   │   ├── product/[slug]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── auth/[...nextauth]/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
│
├── components/
│   ├── shared/
│   │   ├── header/
│   │   └── product/
│   ├── ui/
│   └── Footer.tsx
│
├── data/
│   ├── products.ts
│   ├── users.ts
│   └── seed.ts
│
├── lib/
│   ├── actions/
│   │   ├── findMobile.actions.ts
│   │   ├── otp.actions.ts
│   │   ├── product.actions.ts
│   │   └── user.action.ts
│   ├── prisma.ts
│   ├── utils.ts
│   └── validators.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│   └── images/
│
├── auth.ts
├── prisma.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🏗️ Architecture

The application follows the Next.js App Router convention, using route groups to separate concerns:

- **`(auth)`** — sign-in, sign-up, and OTP pages, sharing an auth-specific layout
- **`(root)`** — the storefront itself (home page and product pages)
- **Server Actions** (`lib/actions/`) — handle authentication and data-fetching logic directly from Server/Client Components, replacing a conventional REST layer
- **Prisma** (`lib/prisma.ts`) — data access layer over SQLite via the `better-sqlite3` adapter
- **Validators** (`lib/validators.ts`) — `zod` schemas for form and input validation

---

## 🔐 Authentication Flow

The app supports two NextAuth credential providers:

1. **Email Login** — `signInFormSchema` validates the input, credentials are checked against the hashed password in the database
2. **Mobile Login** — `findMobile` checks whether the mobile number is registered, an OTP is requested through the `OTP` action, and successful verification signs the user in
3. Sessions use the **JWT** strategy (30-day expiry, refreshed daily)
4. Passwords are hashed with **bcrypt** before storage

Required environment variable:

```
AUTH_SECRET=
```

---

## 🗄️ Database

The project uses SQLite through Prisma with the `better-sqlite3` driver.

Database configuration is provided through:

```
DATABASE_URL=
```

Schema models: `Product`, `User`, `Account`, `Session`, `VerificationToken`. Migrations live under `prisma/migrations/`, and `npm run seed` populates sample products and users.

---

## 👨‍💻 Author

Ali Moradpour — [GitHub](https://github.com/AliMoradpour) · [Portfolio](https://alimoradpour.ir)

---

## 📄 License

No license file is currently included in this repository.
