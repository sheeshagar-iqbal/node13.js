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
        console.log(req.method);
        res.end()
        
    }
    else if (req.url=='/about'){
        res.write('<h1>About page<h1/>')
        res.end()
    }
    else if (req.url=='/service' &&    req.method =="POST"){
        let store=''
        req.on ('data',(item)=>{
            store+=item
        })
        req.on('end',()=>{
            console.log(store);
            
        })
        
        res.end()
    }
    else if (req.url=='/contact' && req.method =='POST'){
        res.write('<h1>Contact page<h1/>')
        console.log('success');
     
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


server.listen(4000,()=>console.log('server runing op port 4000'))
