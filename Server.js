const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.info(`Mongo DB connected to: 
        ${conn.connection.host}`);
    } catch (error) {
        console.error("Mongo DB Connect Error:",
            error);
    }
}

db();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const userRoutes = require('./route/UserRoute');
const foodsRoutes = require('./route/FoodsRoute');
const customerRoutes = require('./route/CustomerRoute');

app.use('/api/users', userRoutes);
app.use('/api/foods', foodsRoutes);
app.use('/api/customer', customerRoutes);