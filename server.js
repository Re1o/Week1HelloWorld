const { response } = require('express');
const express = require('express');
const app = express();


app.get('/', (request, response)=>{
    console.log(request);
    response.send('Hello World');
    
});

app.get('/contact', (request,response)=>{
    response.send('5885858585');
});

app.get('*', (req, res)=>{
    res.send("404 not fuund");
});  


app.listen(3000, function(){
    console.log("Server is running on port 3000");



});

