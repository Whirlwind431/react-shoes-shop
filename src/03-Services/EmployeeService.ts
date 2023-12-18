import axios from "axios";
import EmployeesModel from "../02-Models/EmployeesModel";
import appConfig from "../01-Utils/Config";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeesModel[]> {

        // Request
        const response = await axios.get<EmployeesModel[]>(appConfig.employeesUrl)
        const employees = response.data

        return employees
    }
}

// Singleton
const EmployeesService = new EmployeeService()

export default EmployeesService