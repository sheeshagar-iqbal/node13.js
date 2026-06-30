const fs = require('fs')

// fs.writeFile('create.txt','create the file',(e)=>{
//     if(e){
//         console.log(e);
        
//     }else{
//         console.log('create file successfully');
        
//     }
// })


// fs.appendFile('create.txt','append  the file',(e)=>{
//     if(e){
//         console.log(e);
        
//     }else{
//         console.log('append the data in  file ');
        
//     }
// })

// fs.writeFile('next.txt','next file create',(e)=>{
//     if(e){
//         console.log(e);
        
//     }else{
//         console.log('success ');
        
//     }
// })

// fs.rename('next.txt','info.txt',(e)=>{
//     if(e){
//         console.log(e);
        
//     }else{
//         console.log('success ');
        
//     }
// })

fs.unlink('create.txt',(e)=>{
    if(e){
        console.log(e);
        
    }else{
        console.log('success ');
        
    }
})