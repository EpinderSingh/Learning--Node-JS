const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body> <h1>Hello Welcome to my page!</h1></body>');
    res.write('</html>');

    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>',
    );
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write(
      '<body> <ul> <li>User - 1</li>  <li> User - 2</li>  </ul> </body>',
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const user = parseBody.split('=')[1];
      fs.writeFile('user.txt', user, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.end();
});

server.listen(3000);
