const http = require('http');
const port = 3000;

const routes = {
  '/': 'Node course',
  '/books': 'I have entered in books page',
  '/authors': 'Authors list',
  '/publishers': 'Publishers page',
  '/about': 'Informations about the project',
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`)
);
