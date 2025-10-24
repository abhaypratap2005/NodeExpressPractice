const {readFile} = require('fs')

console.log('started a first task')

readFile('./test/test1.txt', 'utf-8' , (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')

})

console.log('starting next wtask')