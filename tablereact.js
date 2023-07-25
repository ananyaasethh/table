import React from 'react';

const ReactTable = ({crfiHeading, crfiNo, createdBy, tableData,drawing_number }) => {
  return (
        <div className="container">
      <button className="close-button">&#10006;</button>
      <h2>{crfiHeading}</h2>
      <h4 className='number'>CRFI No: {crfiNo}</h4>
      <h6 className='grey'>Created By: {createdBy}</h6>
      <h6 className='grey'>Drawing number:{drawing_number}</h6>
      
    <table style={{width: '100%' }}>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Action</th>
          <th>Action By</th>
          <th>Action By Role</th>
          <th>Action On</th>
          <th>Remarks</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((props) => (
          <tr key={props.sno}>
            <td>{props.sno}</td>
            <td>{props.action}</td>
            <td>{props.actionBy}</td>
            <td>{props.actionByRole}</td>
            <td>{props.actionOn}</td>
            <td>{props.remarks}</td>
            <td>{props.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h6>Document Uploaded in CRFI: img.jpg</h6>
    <div>
    <div className='forward'>
    <button className="forward-button">
          Forward
        </button></div>
    <div className="button-container">
        <button className="print-button">
          Print
        </button>
        <button className="view-checklist-button">View Checklist</button>
      </div>
      </div>
    </div>
  );
};

export default ReactTable;
