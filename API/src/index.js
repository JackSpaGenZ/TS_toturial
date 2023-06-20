
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write([
        {
            "id" : 1,
            "title" : "first post",
            "content" : " a ",
            "author" : "JackieTruong",
            "authorId" : "21020300"

        },
        {
            "id" : 2,
            "title" : "second post",
            "content" : " b ",
            "author" : "JackieChan",
            "authorId" : "21020300"
        }
    ]);
    res.end();
}).listen(3000);