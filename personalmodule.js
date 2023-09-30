const http = require('http');
const os = require('os');
const path = require('path');

// Функция для определения уведомления в зависимости от времени
function getGreeting() {
  const currentDate = new Date();
  if (currentDate.getHours() < 12) {
    return 'Good morning!';
  } else if (currentDate.getHours() < 18) {
    return 'Good afternoon!';
  } else {
    return 'Good nigth!';
  }
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // Получаем уведомление из функции getGreeting
  const greeting = getGreeting();

  res.write(`${greeting}\n`);
  res.write('System Information:\n');
  res.write(`Current user name: ${os.userInfo().username}\n`);
  res.write(`OS Type: ${os.type()}\n`);
  const uptimeInMinutes = os.uptime() / 60;
  res.write(`System Work Time: ${uptimeInMinutes} minutes\n`);
  const currentDirectory = path.resolve('.');
  res.write(`Current working directory: ${currentDirectory}\n`);
  const serverFilePath = __filename;
  res.end(`Server file path: ${serverFilePath}\n`);
});

server.listen(5000, 'localhost', () => {
  console.log('Server is Listening!');
});
