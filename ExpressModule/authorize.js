const authorize = (req, res, next) =>{
    console.log('authorize')
    next()
}

module.exports()


// 3. Multiple Middleware Functions

// You can chain multiple middleware for a single route.

// Express will execute them in order.

// Example:

// const first = (req, res, next) => {
//   console.log("First middleware");
//   next();
// };

// const second = (req, res, next) => {
//   console.log("Second middleware");
//   next();
// };

// app.get('/', first, second, (req, res) => {
//   res.send('Hello with multiple middleware!');
// });


// This allows splitting logic into small reusable functions.