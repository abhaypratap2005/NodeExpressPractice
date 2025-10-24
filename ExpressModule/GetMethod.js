const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./method-public'))


app.get('./api/people', (req, res)=>{
    res.status(200).json({success: true,  data:people})
})

app.post('/login', (req, res)=>{
    res.send('Post')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})