const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Example route for handling product categories
app.get('/categories', (req, res) => {
    res.json({ categories: ['Sofas', 'Tables', 'Chairs'] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
