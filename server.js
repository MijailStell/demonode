const http = require("http");
const url = require("url");
 
function handler(request, response) {
    if(request.method === "GET"){
        response.writeHead(200, {
            "Content-Type": "text/plain",
          });
          response.write("Hello, World!\n");
    }
}
 
http.createServer((request, response) => {
    const parts = url.parse(request.url);
    if (parts.pathname === "/users") {
      handler(request, response);
    }
    response.end();
  })
  .listen(1337);
console.log("server deployed");