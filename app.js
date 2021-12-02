console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello World!");
})
.listen(8080, function () {
    console.log("Server listening...")
})

// Finish setting up the server
