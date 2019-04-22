import React, { Component } from 'react';
import axios from 'axios';
// import EmployeeItem from './EmployeeItem';

// const EmployeeList = props => {
//   const items = props.employees.map(item => {
//     return <EmployeeItem key={item.id} item={item} />;
//   });

//   return (
//     <table className='table'>
//       <thead>
//         <tr className='row header'>
//           <th className='cell'>ID</th>
//           <th className='cell'>Employee Name</th>
//           <th className='cell'>Salary</th>
//           <th className='cell'>Age</th>
//           <th />
//         </tr>
//       </thead>
//       {items}
//     </table>
//   );
// };

class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
      console.log(res);
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <center>
          <h2>List of Employee</h2>
        </center>

        <table className='table'>
          <thead>
            <tr className='row header'>
              <th className='cell'>ID</th>
              <th className='cell'>Employee Name</th>
              <th className='cell'>Salary</th>
              <th className='cell'>Age</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <tr key={employee.id}>
                <td className='cell'>{employee.id}</td>
                <td className='cell'>{employee.employee_name}</td>
                <td className='cell'>{employee.employee_salary}</td>
                <td className='cell'>{employee.employee_age}</td>
                <td className='cell'>
                  <button className='editBtn'> Edit </button>{' '}
                  <button className='deleteBtn'> Remove </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
