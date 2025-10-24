
const {writeFileSync} = require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./file.txt', 'hello World ${i}', {flag: 'a'})
}