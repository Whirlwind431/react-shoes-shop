class Config {

    public employeesUrl = "http://localhost:3030/api/employees/"
}


// Singleton

const appConfig = new Config()

export default appConfig