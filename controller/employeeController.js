const { Employee } = require("../model/employee");
const { getBodyData } = require("../utils/bodyData");

const getAllEmployee = async (res, req) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const employeesData = await Employee.getAllEmployeesData();

  res.end(JSON.stringify(employeesData));
};

const postEmployee = async (res, req) => {
  res.writeHead(201, { "Content-Type": "application/json" });

  const employeeData = await getBodyData(req);

  const newEmployee = new Employee(
    employeeData.name,
    employeeData.age,
    employeeData.position
  );
  newEmployee.saveEmployeeData();

  res.end(
    JSON.stringify({
      message: "new Employee added",
      "New Employee": employeeData,
    })
  );
};

const getEmployeeById = async (req, res, employeeId) => {
  const employee = await Employee.findEmployeeById(employeeId);

  if (!employee) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "employee not found" }));
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "employee Found:", employee }));
  }
};

const updateEmployeeById = async (req, res, id) => {
  const employee = await Employee.findEmployeeById(id);

  if (!employee) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "employee not found" }));
  } else {
    const employeeData = await getBodyData(req);
    const updatedEmployee = {
      name: employeeData.name || employee.name,
      age: employeeData.age || employee.age,
      position: employeeData.position || employee.position,
    };

    await Employee.UpdateEmployee(id, updatedEmployee);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(updatedEmployee));
  }
};

const deleteEmployeeById = async (req, res, id) => {
  const employee = Employee.findEmployeeById(id);
  if (!employee) {
    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ message: "employee not found" }));
  } else {
    await Employee.removeEmployee(id);
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ message: "employee deleted..." }));
  }
};

module.exports = {
  getAllEmployee,
  postEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
