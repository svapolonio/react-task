import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
  state = {
    name: '',
    salary: '',
    age: ''
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeSalary = e => {
    this.setState({
      salary: e.target.value
    });
  };

  handleChangeAge = e => {
    this.setState({
      age: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age
    };

    axios
      .post('http://dummy.restapiexample.com/api/v1/create', data)
      .then(res => {
        console.log('Successfully Created!');
        console.log(res.data);
        window.location.replace('/');
      });
  };

  render() {
    return (
      <div className='form'>
        <h2>Add new Employee</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='enter employee name'
            type='text'
            name='name'
            onChange={this.handleChangeName}
          />
          <br />
          <br />
          <input
            placeholder='enter amount of salary'
            type='number'
            name='salary'
            onChange={this.handleChangeSalary}
          />
          <br />
          <br />

          <input
            placeholder='enter employee age'
            type='number'
            name='age'
            onChange={this.handleChangeAge}
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
