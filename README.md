# Simple REST API - Node.js (MVC Architecture)

## Project Overview

This project is a **simple REST API** built with **vanilla Node.js** following the **MVC architecture**. The API is designed to manage employee data with all the basic **CRUD operations** (Create, Read, Update, Delete). The data is in **JSON** format, and the application follows the **Model-View-Controller (MVC)** structure.

### Features:
- **GET**: Fetch employee data
- **POST**: Add a new employee
- **PUT**: Update employee information
- **DELETE**: Remove an employee

The API is designed to work seamlessly with tools like **Postman** or similar REST API testing platforms.

---

## Routes and Operations

The API provides the following routes for handling employee data:

1. **`GET /`**  
   Returns a welcome message or basic info about the API.

2. **`GET /office/employees`**  
   Fetches a list of all employees.

3. **`POST /office/employees`**  
   Adds a new employee. You need to provide the employee data in JSON format.

4. **`GET /office/employees/:id`**  
   Fetches a specific employee by their ID.

5. **`PUT /office/employees/:id`**  
   Updates the data of a specific employee identified by their ID.

6. **`DELETE /office/employees/:id`**  
   Deletes an employee from the system using their ID.

7. **`404`**  
   Handles any routes that don’t match the predefined routes.

   ---
## Initialization



1. **`npm install `**
2. **`npm start `**  
   


