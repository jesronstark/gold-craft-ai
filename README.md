# GOLD CRAFT PVT. LIMITED

A MERN stack full-service premium e-commerce platform for bank auction gold resale.

## Features Built
- **Concept Integration:** Sourcing gold from bank auctions, redesigning it, and selling at lower retail prices under a trustworthy brand.
- **Pages Included:** Home, Products, ProductDetail, Cart, Checkout, About, How It Works, Reviews, Gold Rate, Contact, Login, Profile, Orders, Blog, Admin.
- **WhatsApp Integration:** Buying a product dynamically creates an automated WhatsApp message for order placement via `wa.me`.
- **UI System:** TailwindCSS, modern styling, dynamic loaders, golden themes, fully responsive on mobile & desktop.
- **Auth Fake-Login:** Instant login without page reload that populates user details into localStorage and triggers the React context to update Nav states.
- **Secret Admin Route:** A protected route `/admin` (not linked publicly), meant only for internal use, displaying bank proxy details, procurement margin, and other metrics.

## Tech Stack
- Frontend: React.js (Vite), TailwindCSS, React-Router-DOM
- Backend: Node.js, Express.js, MongoDB (Mongoose)

## Deployment Options
- **Vercel** configured for frontend deployment by using `vercel.json` rewrites for the SPA.
- **Render** ready backend structure with env variables routing dynamically.

## Run Locally (Dev)
### Server Setup
1. \`cd server\`
2. Add a \`.env\` file.
3. run \`npm install\`
4. run \`node seed.js\` to seed mock products.
5. run \`node server.js\`

### Client Setup
1. \`cd client\`
2. run \`npm install\`
3. run \`npm run dev\`
