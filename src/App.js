import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//Components
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink activeStyle={{ fontWeight: 'bold', color: 'black' }} to='/'>
            {' '}
            List of Employee
          </NavLink>{' '}
          &nbsp;&nbsp;&nbsp;
          <NavLink
            activeStyle={{ fontWeight: 'bold', color: 'black' }}
            to='/create'
          >
            {' '}
            Add Employee
          </NavLink>{' '}
          &nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <Route path='/create' component={AddEmployee} />
          <Route path='/' exact component={EmployeeList} />
        </BrowserRouter>

        {/* <AddEmployee /> */}
        {/* <EmployeeList /> */}
        {/* <EmployeeList employees={this.state.employees} /> */}
      </div>
    );
  }
}

export default App;
