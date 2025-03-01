const Student = require('../models/student.model');

class StudentController {
    async getAllStudents(req, res) { 
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async createStudent(req, res) {
        try {
            const body = req.body;
            const newStudent = new Student(body);
            const student = await newStudent.save();
            res.status(201).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async searchStudent(req, res) {
        try {
            const query = req.query;
            const student = await Student.find(query);
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateStudent(req, res) {
        try {
            const body = req.body;
            const student = await Student.findByIdAndUpdate(req.params.id, body, { new: true });
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteStudent(req, res) {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getStudentById(req, res) {
        try {
            const student = await Student.findOne({ studentId: req.params.id });
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getStudentsByMajor(req, res) {
        try {
            const students = await Student.find({ major: req.params.major });
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getStudentsByGrade(req, res) {
        try {
            const students = await Student.find({ grade: { $gte: req.params.grade } });
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateStudentAge(req, res) {
        try {
            const student = await Student.findOneAndUpdate({ studentId: req.params.id }, { age: req.body.age }, { new: true });
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async addFieldToAllStudents(req, res) {
        try {
            const update = { [req.body.fieldName]: req.body.fieldValue };
            const result = await Student.updateMany({}, { $set: update });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteStudentByStudentId(req, res) {
        try {
            const student = await Student.findOneAndDelete({ studentId: req.params.id });
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteStudentsByGrade(req, res) {
        try {
            const result = await Student.deleteMany({ grade: { $lt: req.params.grade } });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }   

    async deleteAllStudents(req, res) {
        try {
            const result = await Student.deleteMany({});
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new StudentController();