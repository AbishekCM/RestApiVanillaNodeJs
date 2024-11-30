const { rootDir } = require("../utils/pathUtil");
const path = require("path");
const employeeDataFile = path.join(rootDir, "data", "employees.json");
const fs = require("fs").promises;
const { v4: uuid } = require("uuid");

class Employee {
  constructor(name, age, position) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.position = position;
  }

  static async getAllEmployeesData() {
    const fileData = await fs.readFile(employeeDataFile);
    const employeesData = JSON.parse(fileData);

    return employeesData;
  }

  async saveEmployeeData() {
    const fileData = await fs.readFile(employeeDataFile);
    const employeesData = JSON.parse(fileData);
    employeesData.push(this);

    await fs.writeFile(employeeDataFile, JSON.stringify(employeesData));
  }

  static async findEmployeeById(id) {
    const employees = await this.getAllEmployeesData();
    const employee = employees.find((emp) => emp.id === id);

    return employee;
  }

  static async UpdateEmployee(id, employee) {
    const fileData = await fs.readFile(employeeDataFile);
    const employeesData = JSON.parse(fileData);

    const index = employeesData.findIndex((emp) => emp.id === id);
    employeesData[index] = { id, ...employee };

    await fs.writeFile(employeeDataFile, JSON.stringify(employeesData));
  }

  static async removeEmployee(id) {
    const fileData = await fs.readFile(employeeDataFile);
    let employeesData = JSON.parse(fileData);
    employeesData = employeesData.filter((emp) => emp.id !== id);

    await fs.writeFile(employeeDataFile, JSON.stringify(employeesData));
  }
}

module.exports = { Employee };
