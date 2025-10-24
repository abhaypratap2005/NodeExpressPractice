const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
console.log(`the system uptime is  ${os.uptime()}`)

//return architecture
console.log(os.arch());

const currentos = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentos)