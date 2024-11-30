const http = require("http");
const employeeController = require("./controller/employeeController");

const server = http.createServer((req, res) => {
  const pattern = /^\/office\/employees\/([\w-]+)$/;
  const match = req.url.match(pattern);

  if (req.url === "/office/employees" && req.method === "GET") {
    employeeController.getAllEmployee(res, req);
  } else if (req.url === "/office/employees" && req.method === "POST") {
    employeeController.postEmployee(res, req);
  } else if (match && req.method === "GET") {
    employeeController.getEmployeeById(req, res, match[1]);
  } else if (match && req.method === "PUT") {
    employeeController.updateEmployeeById(req, res, match[1]);
  } else if (match && req.method === "DELETE") {
    employeeController.deleteEmployeeById(req, res, match[1]);
  } else if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Employees Data API</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message:
          "routing does not exist, please use office/employees end point",
      })
    );
  }
});

const PORT = process.env.PORT || 4002;
server.listen(PORT, () => {
  console.log(`server is listening: http://localhost:${PORT}`);
});
