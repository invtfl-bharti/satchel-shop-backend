# Heavenly 🌟

**Heavenly** is an elegant and feature-rich e-commerce platform designed for clothing and bag brands. Built with modern web technologies, it delivers a seamless user experience with dynamic functionality and secure session management.

---

## Features ✨

- **Dynamic UI**: Built using EJS for server-side rendering.
- **Secure Sessions**: Sessions are managed using `express-session` and cookies with `cookie-parser`.
- **Flash Messages**: Enhanced user experience with real-time notifications using `connect-flash`.
- **Database Integration**: MongoDB for reliable data storage, managed via Mongoose.
- **Structured Routing**: Modular route handling for owners, users, products, and general routes.

---

## Tech Stack 🛠️

### Backend

- **Node.js**: Runtime environment.
- **Express.js**: Web application framework.
- **Mongoose**: MongoDB object modeling for Node.js.
- **MongoDB**: NoSQL database.

### Frontend

- **EJS (Embedded JavaScript)**: Templating engine for dynamic content rendering.

### Middleware

- **dotenv**: For managing environment variables.
- **cookie-parser**: For parsing cookies in requests.
- **express-session**: For managing user sessions.
- **connect-flash**: For flash messaging.

---

## Installation 📦

### Prerequisites

- Node.js and npm installed.
- MongoDB server running locally or on a cloud service like MongoDB Atlas.

### Steps

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/heavenly.git
   cd heavenly

    ```bash
        npm install

    ```bash
        PORT=3000
        MONGO_URI=your_mongodb_connection_string
        SESSION_SECRET=your_secret_key

    ````bash
        npm start


### Project Structure

    heavenly/

├── config/
│ └── mongoose-connection.js # MongoDB connection setup
├── routes/
│ ├── ownersRouter.js # Routes for owner operations
│ ├── usersRouter.js # Routes for user operations
│ ├── productsRouter.js # Routes for product management
│ └── index.js # General routes
├── views/ # EJS templates
├── public/ # Static assets (CSS, JS, Images)
├── node_modules/ # Installed dependencies
├── .env # Environment variables
├── package.json # Project metadata
└── server.js # Entry point for the application
