
import React from 'react';
import ReactTable from './tablereact.js';
import './App.css';
const App = () => {
  
  const tableData = [
    {
      sno: 1,
      action: 'Action 1',
      actionBy: 'bhhoo',
      actionByRole: 'Manager',
      actionOn: '2023-07-24',
      remarks: 'remark 1',
      location: 'Location A',
    },
    {
      sno: 2,
      action: 'Action 2',
      actionBy: 'hoo',
      actionByRole: 'Supervisor',
      actionOn: '2023-07-25',
      remarks: 'remark 2',
      location: 'Location B',
    },
   
  ];

  const crfiHeading = ' View CRFI';
  const crfiNo = '123334554434/generic/no';
  const createdBy = 'ishan hooda';
  const drawing_number="1234";

  return (
    <div>
      <ReactTable
        crfiHeading={crfiHeading}
        crfiNo={crfiNo}
        createdBy={createdBy}
        tableData={tableData}
        drawing_number={drawing_number}
      />
    </div>
  );
};

export default App;
