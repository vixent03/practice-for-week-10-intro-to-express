import express from "express"
const app = express()

app.get("/status",(req,res)=>{
    res.send(`the server is alive `)
})

const port = 5000
app.listen(port,()=> {
    console.log(`sever is listening on port ${port}`)
})
