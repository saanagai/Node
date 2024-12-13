const http = require("http");

// const html = requre("./indes.js");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hello world");
  })
  .listen(8080);
