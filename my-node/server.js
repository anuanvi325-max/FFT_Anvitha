// const http = require('http');
// const server = http.createServer((req, res) => {
// res.end("im node js server !!");
// });
// server.listen(3000);
// console.log("http://localhost:3000");

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  fs.readFile('resume.html', (err, data) => {
      res.end(data);
    }
  );
});
server.listen(7000);
console.log("http://localhost:7000");