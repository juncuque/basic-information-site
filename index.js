const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/pages');
const index = fs.readFileSync(`${filePath}/index.html`).toString();
const about = fs.readFileSync(`${filePath}/about.html`).toString();
const contact = fs.readFileSync(`${filePath}/contact.html`).toString();
const errorPage = fs.readFileSync(`${filePath}/404.html`).toString();

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else if (pathname === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'{});
    res.end(about);
  } else if (pathname === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(contact);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(errorPage);
  }
});

server.listen(8080);