import React, { useState } from 'react';

const MarksForm = ({ student, handleCalculate }) => {
  const [marks, setMarks] = useState(student.currentSemesterData.marks.length ? student.currentSemesterData.marks : Array(6).fill(''));

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const addSubject = () => {
    setMarks([...marks, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculate(marks);
  };

  return (
    <div className="container">
      <h2>Enter Marks</h2>
      <form onSubmit={handleSubmit}>
        {marks.map((mark, index) => (
          <input
            key={index}
            type="number"
            placeholder={`Mark ${index + 1}`}
            value={mark}
            onChange={(e) => handleChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" className="add-subject-btn" onClick={addSubject}>Add Subject</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MarksForm;
