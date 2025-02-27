const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true },
    major: { type: String, required: true },
    grade: { type: Number, required: true },
    gender: { type: Boolean, required: true },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        unique: true
    },
    address: { type: String, default: 'HCM' },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;