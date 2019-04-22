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
      <form onSubmit={this.submitForm}>
        Name:{' '}
        <input
          className='cell'
          type='text'
          name='employeeName'
          onChange={this.handleChange}
        />
        <br />
        <br />
        Salary:{' '}
        <input
          className='cell'
          type='number'
          name='employeeSalary'
          onChange={this.handleChange}
        />
        <br />
        <br />
        Age:{' '}
        <input
          className='cell'
          type='number'
          name='employeeAge'
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default AddEmployee;
