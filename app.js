const express = require('express')
const app = express()
const port = 3000

// app.use()

app.get ('/Home',function(request, response){
    response.sendFile(__dirname + '/views/index.html')
});
app.get ('/about',function(request, response){
    response.sendFile(__dirname + '/views/about.html')
});
app.get ('/Works',function(request, response){
    response.sendFile(__dirname + '/views/works.html')
});


//Tell our server to continuously listen for requests on port 3000. 
//You can optionally provide a callback to do something once the listening is set up.
app.listen(3000, () => console.log('My first app listening on port 3000! ')); 