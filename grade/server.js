import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let students = [];

app.post('/api/student', (req, res) => {
  const { rollNo, name, branch, semester } = req.body;
  let student = students.find(s => s.rollNo === rollNo);
  if (!student) {
    student = { rollNo, name, branch, semesters: {} };
    students.push(student);
  }
  const currentSemesterData = student.semesters[semester] || { marks: [], cgpa: '', grade: '' };
  res.send({ ...student, currentSemesterData });
});

app.post('/api/marks', (req, res) => {
  const { rollNo, semester, marks } = req.body;
  const student = students.find(s => s.rollNo === rollNo);
  if (!student) {
    return res.status(404).send({ message: 'Student not found.' });
  }

  const totalMarks = marks.reduce((acc, mark) => acc + parseInt(mark, 10), 0);
  const cgpa = (totalMarks / marks.length) / 10;
  let grade = '';

  if (cgpa >= 9) grade = 'A';
  else if (cgpa >= 8) grade = 'B';
  else if (cgpa >= 7) grade = 'C';
  else if (cgpa >= 6) grade = 'D';
  else grade = 'F';

  student.semesters[semester] = { marks, cgpa: cgpa.toFixed(2), grade };

  const result = {
    rollNo: student.rollNo,
    name: student.name,
    semester,
    marks,
    cgpa: cgpa.toFixed(2),
    grade
  };

  res.send(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
