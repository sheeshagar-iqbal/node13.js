// console.log('xyz')
// let a=2
// let b=4
// console.log(a+b);

// const demo =require('./first')

// console.log(demo);

// demo.working()


// const {add,sub,div}= require('./second.js')

// console.log(add(4,2));

// console.log(sub(4,2));

// console.log(div(4,2));


const http = require('http')

let server =http.createServer((req,res)=>{
    // res.write('<h1>welcome to the server...</h1>')
    // res.write(JSON.stringify({
    //     name:'qasim',
    //     city:'bpl'
    // }))
    // res.end()
    if (req.url=='/'){
        res.write('<h1>Home page<h1/>')
        res.end()
    }
    else if (req.url=='/about'){
        res.write('<h1>About page<h1/>')
        res.end()
    }
    else if (req.url=='/service'){
        res.write('<h1>Service page<h1/>')
        res.end()
    }
    else if (req.url=='/contact'){
        res.write('<h1>Contact page<h1/>')
        res.end()
    }
    else if (req.url=='/view'){
        res.write('<h1>View page<h1/>')
        res.end()
    }
    else{
        res.write('<h1>404 page<h1/>')
        res.end()
    }
})


server.listen(4000,()=>console.log('server runing op port 3000'))
