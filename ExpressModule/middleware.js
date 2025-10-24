const express = require('express')

const app = express()

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = req.time;
    console.log(method, url , time);
    next();
}
app.use(logger)

app.get('/', logger, (req, res)=>{
    
    res.send('Home')
})


app.get('./about', (req, res)=>{
    res.send('About')
})




app.listen(5000, ()=>{
    console.log('Server runnning')
})