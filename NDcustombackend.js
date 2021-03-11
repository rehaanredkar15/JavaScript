const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 1000;
const home = fs.readFileSync('./indexjs.html');
const about = fs.readFileSync('./aboutjs.html');
const services = fs.readFileSync('./servicesjs.html');
const contact = fs.readFileSync('./contactjs.html');

const server = http.createServer((req, res) => {

  console.log(req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});

server.listen(port, hostname, () => {
    

      console.log(`Server running at http://${hostname}:${port}/`);
});