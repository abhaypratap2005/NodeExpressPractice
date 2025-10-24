const express = require('express');
const path = require('path')
const app =  express()


//setup static and middleware
app.use(express.static('./public'))  // name of the file path like this 





// Define a route

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>resourcse not found</h1>')
})
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
//app.get
// app.post
// app.put 
// app.delete 
// app.all 
// app.use 
// app.listen
