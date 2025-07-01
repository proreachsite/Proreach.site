const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.end('Hello from Cloud Run!');
});
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
