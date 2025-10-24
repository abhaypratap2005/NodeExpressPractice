const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
    res.json(products)
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        const {id, name , image} = product
        return {id, name , image}
    
})
res.join(newProducts)
})

app.get('/api/products/1', (req, res)=>{
    const newProducts = products.map((product) =>{
        const {id, name , image} = product
        return {id, name , image}
    })
    res.join(newProducts)
})
   
app.get('./api/v1/query',(req, res)=>{
    const {search, limit} = req.querry
    let sortedProducts = [...products]
})

if(search){
    sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}


app.listen(5000, () => {
    console.log('Server is Listening on port 5000')
})
