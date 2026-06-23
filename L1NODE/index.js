const express =require('express')
const app= express()

app.listen(4000,()=> console.log('server run sucessfully')
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

