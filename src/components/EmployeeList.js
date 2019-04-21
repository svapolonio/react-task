import React from "react";
import EmployeeItem from './EmployeeItem';


const EmployeeList = props => {

    const items = props.employees.map(item => {
        return <EmployeeItem key={item.id} item={item} />;
    })

    return (

        <table className="table">
            <thead>
                <tr className="row orange">
                    <th className="cell">ID</th>
                    <th className="cell">Employee Name</th>
                    <th className="cell">Salary</th>
                    <th className="cell">Age</th>
                    <th></th>
                </tr>
            </thead>

            {items}
        </table>
    )
}



export default EmployeeList;

