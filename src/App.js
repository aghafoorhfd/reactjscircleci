// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import StudentWithSubjectsTable from './components/StudentWithSubjectsTable';

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentsWithSubjects, setStudentsWithSubjects] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [showStudentsWithSubjects, setShowStudentsWithSubjects] = useState(false);

  const fetchStudents = async () => {
    const response = await fetch('https://localhost:7091/api/Students');
    const data = await response.json();
    setStudents(data);
    setShowStudents(true);
    setShowStudentsWithSubjects(false);
  };

  const fetchStudentsWithSubjects = async () => {
    const response = await fetch('https://localhost:7091/api/students/WithSubjects');
    const data = await response.json();
    setStudentsWithSubjects(data);
    setShowStudents(false);
    setShowStudentsWithSubjects(true);
  };

  return (
    <div>
      <Header
        onShowStudents={fetchStudents}
        onShowStudentsWithSubjects={fetchStudentsWithSubjects}
      />
      {showStudents && <StudentTable students={students} />}
      {showStudentsWithSubjects && <StudentWithSubjectsTable students={studentsWithSubjects} />}
    </div>
  );
};

export default App;
