const http = require("http");
const { CommandEmitter } = require("./events");

CommandEmitter.on("server", () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Notes Application HTTP Server\n");
  });

  server.listen(3000, () => {
    console.log("HTTP server running on http://localhost:3000");
  });
});
