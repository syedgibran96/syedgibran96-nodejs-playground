const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');

    fs.readFile("./index.html", (error, data) => {
        if(error){
            console.log(error);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
    // res.write('<p> hello world </p>');
    
});

server.listen(3000,'localhost', () => {
    console.log('listening to request on port 3000');
});

