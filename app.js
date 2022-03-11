const express = require("express");
   
const app = express();
   
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
app.use('*/css',express.static('public/css'));
app.use('*/fonts',express.static('public/fonts'));

app.get("/main", function (request, response) {
    
    response.sendFile(__dirname + "/public/main.html");
});
app.get("/second", function (request, response) {
    response.sendFile(__dirname + "/public/second.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));