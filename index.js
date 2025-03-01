const express = require('express');
const app = express();
require('./config/database/mongo.db');
require('dotenv').config();
const studentRoutes = require('./routes/student.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', studentRoutes);

const { PORT } = process.env;

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});