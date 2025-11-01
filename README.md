# Career Social

Career Social is a modern social networking platform for professionals, similar to LinkedIn. Users can create profiles, connect with others, and share posts to enhance their professional network.

---

## Features

- **Authentication & Authorization**
  - Sign in with Google using **NextAuth.js**
  - Secure session management
- **Profile & Networking**
  - User profiles with bio, skills, and profile picture
  - Connect with other professionals
- **Posts & Interactions**
  - Share posts, images, or links
  - Like and comment on posts
- **Real-time Updates**
  - Notifications for likes, comments, and connections
- **Dark/Light Theme Support**
  - Toggle between dark and light themes with **Next-Themes**
- **Responsive Design**
  - Mobile-first, built with **TailwindCSS** and **Framer Motion**
- **Database**
  - MongoDB for persistent user data and posts
  - Optional Prisma integration for structured database operations

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Styling | TailwindCSS, MUI, Emotion |
| State Management | Recoil |
| Authentication | NextAuth.js (Google OAuth) |
| Database | MongoDB (with @next-auth/mongodb-adapter) |
| Animations | Framer Motion |
| Utilities | timeago-react, clsx |

---

## Getting Started

### Prerequisites

- Node.js >= 22
- npm >= 10
- MongoDB instance (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AadityaUoHyd/career-social.git
cd career-social
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root:

```bash

NEXT_PUBLIC_APP_NAME=Career Social
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secure_random_secret_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=mongodb://localhost:27017/career-social # I am using MongoDB Atlas
MONGODB_DB=career-social

NEWS_API_KEY=your_api_key_here

NEXT_PUBLIC_DEFAULT_THEME=light

```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command               | Description                       |
| --------------------- | --------------------------------- |
| `npm run dev`         | Start development server          |
| `npm run build`       | Build production version          |
| `npm start`           | Start production server           |
| `npm run lint`        | Run ESLint                        |

---

## Folder Structure

```
career-social/
├─ pages/                  # Next.js pages
│  ├─ api/auth/[...nextauth].js  # NextAuth authentication routes
├─ components/             # Reusable UI components
├─ lib/                    # Helper functions & db connections
├─ public/                 # Static files (images, logos)
├─ styles/                 # TailwindCSS or global styles
├─ .env.local              # Environment variables
├─ package.json            # Project dependencies & scripts
```

---

## Deployment

### Vercel

1. Push your project to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Set environment variables in Vercel dashboard:

   * `NEXTAUTH_URL=https://career-social.vercel.app`
   * `NEXTAUTH_SECRET=<your_production_secret>`
   * `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
   * `MONGODB_URI` (production MongoDB Atlas)
4. Deploy and visit your production site.

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request

---

## License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

---

## Pending Task
- Add like,commenting,share feature
- Add follow/unfollow feature
- Add file upload (images, videos, documents)
- Add bookmarking post
- Add notification feature
- Add subscription plan with razorpay payment gateway
- Add job posting & searching feature
- Add profile edit feature
- Add Email verification, forgot/reset password
- Add 'Who viewed your profile', 'Views of your post'
- Add newsletters
- Add message chats
- Create your resume link

## Acknowledgements

* [Next.js](https://nextjs.org/)
* [NextAuth.js](https://next-auth.js.org/)
* [MongoDB](https://www.mongodb.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* Inspired by LinkedIn
