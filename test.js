const { log } = require('console');
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('System Information:\n');
    res.write(`Current user name: ${os.userInfo().username}\n`);
    res.write(`OS Type: ${os.type()}\n`);
    const uptimeInMinutes = os.uptime() / 60;
    res.write(`System Work Time: ${uptimeInMinutes} minutes\n`);
    const currentDirectory = path.resolve('.');
    res.write(`Current working directory: ${currentDirectory}\n`);
    const serverFilePath = __filename;
    res.end(`Server file path: ${serverFilePath}\n`);
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.end('Method not allowed');
  }
});

server.listen(5000, 'localhost', () => {
  console.log('Server is Listening!');
});
