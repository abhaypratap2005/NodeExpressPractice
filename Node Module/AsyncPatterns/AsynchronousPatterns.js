const http = require('http');

    const server = http.createServer((req, res)=>{
        if(req.url==='/'){
            res.end("Home Page");
        }
        if(req.url==='/about'){
            for(let i=0;i<1000;i++){

            }
            req.end('About Page');
        }
});

server.listen(5000, ()=>{
    console.log('Server is Listening');
})






// 🔹 Async Patterns - Blocking Code
// Blocking code stops execution until task completes (e.g., fs.readFileSync).
// In Node.js (single-threaded), blocking = bad performance.
// Always prefer async methods (non-blocking).

// 🔹 Async Patterns - Setup Promises
// Promises provide a cleaner way to handle async tasks than callbacks.
// Use .then() / .catch() or async/await for better readability.
// Helps avoid "callback hell".

// 🔹 Async Patterns - Refactor To Async
// Convert callback-based async code into async/await.
// Makes code look synchronous but still non-blocking.
// Easier to read, write, and handle errors (try/catch).

// 🔹 Async Patterns - Node's Native Option
// Node provides built-in async options:
// - fs/promises (promise-based file system API)
// - util.promisify() to convert callbacks → promises
// - process.nextTick(), setImmediate(), timers, etc.

// 🔹 Events Info
// Node.js is event-driven → EventEmitter allows custom events.
// emitter.on() → listen to events
// emitter.emit() → trigger events
// Used in streams, HTTP, WebSockets, etc.
