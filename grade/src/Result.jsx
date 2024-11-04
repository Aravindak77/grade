import React from 'react';

const Result = ({ result, handleReset }) => {
  return (
    <div className="container">
      <h2>Result</h2>
      <p><strong>Roll No:</strong> {result.rollNo}</p>
      <p><strong>Name:</strong> {result.name}</p>
      <p><strong>Semester:</strong> {result.semester}</p>
      <p><strong>Marks:</strong> {result.marks.join(', ')}</p>
      <p><strong>CGPA:</strong> {result.cgpa}</p>
      <p><strong>Grade:</strong> {result.grade}</p>
      <button onClick={handleReset}>Go Back</button>
    </div>
  );
};

export default Result;
