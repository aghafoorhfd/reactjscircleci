// src/components/Header.js
import React from 'react';

const Header = ({ onShowStudents, onShowStudentsWithSubjects }) => {
  return (
    <header>
      <button onClick={onShowStudents}>Show Student Info</button>
      <button onClick={onShowStudentsWithSubjects}>Show Students with Subjects</button>
    </header>
  );
};

export default Header;
