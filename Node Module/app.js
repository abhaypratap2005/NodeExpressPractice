// common js , every file is module in node js
//modules - encapsulated code (only share minimum)


//local
const secret = 'super secret'

//share
const john = 'john'
const sayHi = (name) =>{
    console.log(`Hi i am ${name}`)
}
module.exports = sayHi