const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');
const aboutPage = fs.readFileSync('./about.html');
const contactPage = fs.readFileSync('./contact-me.html');
const pageNotFound = fs.readFileSync('./404.html');

// create server
const server = http.createServer(function (request, response) {

    const url = request.url;

    if (url === "/") {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(homePage);
        response.end();
    }
    else if (url === "/about") {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(aboutPage);
        response.end();
    }
    else if (url === "/contact") {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(contactPage);
        response.end();
    } else {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(pageNotFound);
        response.end();
    }
});

server.listen(8080);

console.log('Listening on port 8080...');