const { log } = require('console');
let fs =require('fs')
// fs.readFile('first.txt','utf8',(e,data)=>{
//     if(e){
//         console.log(e);
//     }
//     else{
//         console.log(data);
        
//     }
// })


// fs.writeFile('first.txt','write function',(e)=>{
//     if(e){
//         console.log(e);
//     }
//     else{
//         console.log('write success');
        
//     }
// })



// fs.writeFile('second.txt','second file create',(e)=>{
//     if(e){
//         console.log(e);
//     }
//     else{
//         console.log('write success');
        
//     }
// })

// fs.appendFile('first.txt','appent the data',(e)=>{
//     if(e){
//         console.log(e);
        
//     }
//     else{
//         console.log('append success');
        
//     }
// })


// fs.appendFile('third.xt','appent the data',(e)=>{
//     if(e){
//         console.log(e);
        
//     }
//     else{
//         console.log('append success');
        
//     }
// })

// fs.unlink('first.txt',(e)=>{
//     if(e){
//         console.log(e);
        
//     }
//     else{
//         console.log('first file deleted');
        
//     }
// })
fs.rename('second.txt','myfile.txt',(e)=>{
    if(e){
        console.log(e);
        
    }
    else{
        console.log('second file name changed into myfile');
        
    }
})

