const mongoose = require('mongoose');
const MONGO_DB_URL = process.env.MONGO_DB_URL;

class MongoDB {
    constructor() {
        this.connect()
    }

    async connect() {
        try {
            const response = await mongoose.connect("mongodb://localhost:27017/students_management_db");
            console.log('mongodb connected');

        } catch (error) {
            console.error(error);
        }
    }
}

const instance = new MongoDB();
module.exports = instance;