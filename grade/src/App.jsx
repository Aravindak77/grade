import React, { useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import MarksForm from './MarksForm';
import Result from './Result';
import './styles.css';

const App = () => {
  const [student, setStudent] = useState(null);
  const [result, setResult] = useState(null);
  const [semester, setSemester] = useState(null);

  const handleNext = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/student', formData);
      setStudent(response.data);
      setSemester(formData.semester);
    } catch (error) {
      console.error('Error submitting student data:', error);
    }
  };

  const handleCalculate = async (marks) => {
    try {
      const response = await axios.post('http://localhost:5000/api/marks', { rollNo: student.rollNo, semester, marks });
      setResult(response.data);
    } catch (error) {
      console.error('Error submitting marks:', error);
    }
  };

  const handleReset = () => {
    setStudent(null);
    setResult(null);
    setSemester(null);
  };

  return (
    <div>
      {!student && !result && <StudentForm handleNext={handleNext} />}
      {student && !result && <MarksForm student={student} handleCalculate={handleCalculate} />}
      {result && <Result result={result} handleReset={handleReset} />}
    </div>
  );
};

export default App;
