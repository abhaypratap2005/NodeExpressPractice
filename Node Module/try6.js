const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./test/test1.txt', 'utf-8');

writeFileSync('./test/newtest.txt', `Here is the result ${first}`)

//yaha pe 2 chize dhyan me rakhni h async or sync ye 2 type ke fs module hote h
