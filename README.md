## Introduction

This website was carefully crafted from the ground using Next.js and other helpful tools, starting in June 2024.

I'm constantly making improvements to add more features and content. This website is where I share what I've learned and offer insights to others.

If you find this website helpful, please consider leaving a rating. 😎👍🏻

If you have any questions, suggestions, or anything else, don't hesitate to reach out to me! 🧑‍💻
<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 13.5.6
- ⚛️ React 18
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🗂 Prisma Client
- 🔥 Firebase
- 🦫 Zustand
- 〰️ SWR
- ➰ Framer Motion
- 💢 React Icons
- 🛢 Jest
- 🧿 Absolute Import and Path Alias
- 📏 ESLint
- ✨ Prettier
- 🐶 Husky & Lint Staged
- 📌 Conventional Commit Lint

<br />

## Features

On this website there are several features that will continue to be updated and added in the future.

- ### 🤖 ChatGPT AI (Unavailable)

You can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for. (Currently not available, but you can configure it on your machine with your own OpenAI api key)

- ### 💻 JavaScript Playground

A no-fuss pure JavaScript playground with a live feedback loop.

- ### 💬 Realtime Guestbook

Realtime guestbook chat is powered by Firebase. Anyone can leave me a message in this website.

- ### 🎧 Spotify Status

Displays song information being played on spotify in real time using the Spotify API and SWR.

- ### 🕗 Wakatime Statistics

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

- ### 🗳 Projects

The data projects on this blog are taken from the PostgreSQL database connected through the Prisma Client. The database for this application is hosted on Supabase DB.The data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..
<br /><br />

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the ".env.example" file to ".env" and replace the variables with your own in the ".env" file.

### 1. Clone this template using one of the three ways:

1. Clone using git

   ```bash
   git clone https://github.com/Prajualit/Portfolio
   ```

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/Prajualit/Portfolio project-name
   ```

3. Using `degit`

   ```bash
   npx degit Prajualit/Portfolio YOUR_APP_NAME
   ```

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Config .env

This repository uses several environment variables. Please copy .env.example into .env, then fill in the values with your own. For third-party environment variables such as Spotify, Wakatime, Firebase, and others, please refer to the official documentation provided by each provider.

```
BUNDLE_ANALYZER=false
SITE_URL=https://prajualit.vercel.app

# Blog
BLOG_API_URL=

# OpenAI
OPENAI_API_KEY=

# DEV.to
DEVTO_KEY=

# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# WakaTime
WAKATIME_API_KEY=

# GitHub
GITHUB_READ_USER_TOKEN_PERSONAL=
GITHUB_READ_USER_TOKEN_WORK=

# Prisma Database
DATABASE_URL='postgres://USER:PASSWORD@HOST:5432/postgres'

# Contact Form
CONTACT_FORM_API_KEY=

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DB_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_FIREBASE_CHAT_DB=

# Next-Auth SSO
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />
