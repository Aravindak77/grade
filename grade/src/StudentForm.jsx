import React, { useState } from 'react';

const StudentForm = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    branch: '',
    semester: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleNext(formData);
  };

  return (
    <div className="container">
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
        <select name="semester" value={formData.semester} onChange={handleChange} required>
          <option value="" disabled>Select Semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
