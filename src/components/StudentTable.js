import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div>
      <h2>Students Table</h2>
      <table style={{ border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Gender</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.age}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.gender}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
