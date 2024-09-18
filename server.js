const express = require('express');
// const errorHandler = require('./middleware/errorHandler');
// const connectDB = require('./config/dbConnection');
// const dotenv = require('dotenv').config();
const v1Router = require('./routes/v1');
const cors = require('cors');

// connectDB();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/v1', v1Router);
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/menus', require('./routes/menuRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})