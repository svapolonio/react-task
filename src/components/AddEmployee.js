import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
  state = {
    name: '',
    salary: '',
    age: ''
  };

  handleChange = e => {
    this.setState({
      employeeName: e.target.value,
      employeeSalary: e.target.value,
      employeeAge: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();

    const employee = {
      name: this.state.employeeName,
      salary: this.state.employeeSalary,
      age: this.state.employeeAge
    };

    // const data = {
    //   name: 'test',
    //   salary: '30000',
    //   age: '22'
    // };

    axios
      .post('http://dummy.restapiexample.com/api/v1/create', employee)
      .then(res => {
        console.log(res);
        // this.setState({ data: res.data });
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className='form'>
        <h2>Add new Employee</h2>
        <br />
        <form onSubmit={this.submitForm}>
          <input
            placeholder='enter employee name'
            className=''
            type='text'
            name='employeeName'
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            placeholder='enter amount of salary'
            className=''
            type='number'
            name='employeeSalary'
            onChange={this.handleChange}
          />
          <br />
          <br />

          <input
            placeholder='enter employee age'
            className=''
            type='number'
            name='employeeAge'
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
