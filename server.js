// server.js
require('dotenv').config(); // Load environment variables first

const express = require('express'); // Import Express
const cors = require('cors'); // Import CORS middleware
const { connectToDB } = require('./database/mongo'); // Import DB connection
const routes = require('./routes/index'); // Import main routes
const contactRoute = require('./routes/contactRoute'); // Import contactRoute

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
require('./swagger')(app); // Initialize Swagger documentation

// Routes
app.use('/', routes);
app.use('/contacts', contactRoute);

// Test route
app.get('/api/data', (req, res) => {
  res.json({ message: "This is a test route" });
});

// Start server after DB connection
async function start() { // Use async function to handle async DB connection
  try {
    await connectToDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`); // Log server start
    });
  } catch (err) {
    console.error("Failed to start server:", err); // Log error for start failure
    process.exit(1);
  }
}

start();
