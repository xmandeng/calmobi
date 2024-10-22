# Project Setup
This was built using [v0.dev](https://v0.dev). I am not a frontend Typescript developer nor do I pretend to be.  That said, tips & criticisms are welcome.

```bash
npx create-next-app@latest my-app
cd my-app
npx shadcn@latest init
vim package.json

# Note: I needed to edit this file to update REACT dependencies as follows:

# "dependencies": {
#   "react": "^18.2.0",
#   "react-dom": "^18.2.0"
#   // other dependencies...
# }

# The original REACT and REACT-DOM were 19.x.x and looked very experimental

npm install

# needed to remove components.json
rm components.json
npx shadcn@latest init
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
