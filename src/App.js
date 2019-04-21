import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import axios from 'axios';

import EmployeeList from './components/EmployeeList';


class App extends Component {

state = {
    // id: '',
    employees: []
}

componentDidMount(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
        console.log(res);
        this.setState({employees: res.data})
    });
}


render(){
  return(
      <EmployeeList employees={this.state.employees}></EmployeeList>
  )
}

}

export default App;
