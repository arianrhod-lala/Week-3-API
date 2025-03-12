// product-service.js
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// Sample Products Data
const products = [
    { 
        id: 1, 
        name: 'Apple',  
        price: 10 
    },
    {
        id: 2,
        name: 'Banana',
        price: 5
    }
];

// Public Endpoint
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});

