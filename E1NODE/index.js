const express = require('express')
const app = express()   //initaize

app.use(express.json())

app.post('/student',(req,res)=>{
        console.log(req.body);
        res.send('student data appecpted')
        
})


app.post('/emp/:empid',(req,res)=>{
        console.log(req.params.empid);
        console.log(req.query.department);
        console.log(req.body.name);
        console.log(req.body.age);
        res.send('student data appecpted')
        
})

app.get('/contact/help',(req,res)=>{
        res.send("contact helop")
})

app.get('/product/:id/:pname/:price',(req,res)=>{
        console.log(req.params.id);
        console.log(req.params.pname);
        console.log(req.params.price);
        
        res.send("product")
})

app.get('/city',(req,res)=>{
        console.log(req.query.name);
        console.log(req.query.age);
        console.log(req.query.location);
             
        res.send("product")
})

app.get('/city2/:id',(req,res)=>{
        console.log(req.query.name);
       console.log(req.params.id);
       
             
        res.send("product")
})

// app.use('/about',(req,res)=>{
//     res.send('working in about')
// })
// app.use('/contact',(req,res)=>{
//     res.send('working in contact')
// })

// app.use('/',(req,res)=>{
//     res.send('working in home')
// })

// app.get('/',(req,res)=>{
//     res.write("<h1>home pages</h1>")
//     res.end()
// })
// app.get('/about',(req,res)=>{
//     res.write("<h1>about pages</h1>")
//     res.end()
// })

// app.get("/service",(req,res)=>{
//     res.write("<h1>service page<h1/>")
//     res.end()
// })
// app.get("/contact",(req,res)=>{
//     res.write(JSON.stringify({name:"mukul","age":23}))
//     // res.write(JSON.stringify([23,34,'iqbal']))
//     res.end()
// })

// app.get('/help',(req,res)=>{
//         res.send({"name":"mukul","age":23})
// })


// app.get('/read',(req,res)=>{
//     res.send('read')
// })
// app.post('/post',(req,res)=>{
//     res.send('post')
// })
// app.put('/update',(req,res)=>{
//     res.send('update')
// })
// app.delete('/delete',(req,res)=>{
//     res.send('delete')
// })




app.listen(4000, ()=>{
    console.log('server running');
    
})

