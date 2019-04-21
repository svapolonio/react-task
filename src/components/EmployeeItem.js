import React from 'react';

const EmployeeItem = (props) => {
    return (
        <tbody>
            <tr className="">
                <td className="cell">{props.item.id}</td>
                <td className="cell">{props.item.employee_name}</td>
                <td className="cell">{props.item.employee_salary}</td>
                <td className="cell">{props.item.employee_age}</td>
            </tr>
        </tbody>

    )
}

export default EmployeeItem;