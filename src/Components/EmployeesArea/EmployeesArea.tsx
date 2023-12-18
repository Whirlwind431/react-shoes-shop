import EmployeesModel from "../../02-Models/EmployeesModel";
import EmployeesService from "../../03-Services/EmployeeService";
import "./EmployeesArea.css";
import { useEffect, useState } from "react";

function EmployeesArea(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeesModel[]>([])

    useEffect(() => {
        EmployeesService.getAllEmployees()
            .then(employees => setEmployees(employees))
            .catch(err => alert(err.message))
    }, [])


    return (
        <div className="EmployeesArea">
            {employees.map(p =>
                <div className="ElementDiv">
                    <h4 key={p.id}>Full Name:{p.firstName} {p.lastName}</h4>
                    <h4 key={p.id}>Position: {p.title}</h4>
                    <h4 key={p.id}>Country: {p.country}</h4>
                    <h4 key={p.id}>City: {p.city}</h4>
                    <h4 key={p.id}>Birth date: {p.burthdate}</h4>
                    <h4 key={p.id}><img src={p.imageUrl} alt="profile" /></h4>
                </div>)}
        </div>
    );
}

export default EmployeesArea;
