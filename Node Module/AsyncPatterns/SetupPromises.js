const {readFile} = require('fs')

const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, data)=>{
        if(err){
            reject(err)
        } else {
            resolve(data)
        }
        })
    })
}

getText('../test/test1.txt').then(result => console.log(result)).catch((err) => 
    console.log(err))

//refactor to async

const start = async()=>{
    const first = await getText('./test/test1.txt');
    console.log(first)
}