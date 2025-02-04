import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()
const server = express()
const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{
    console.log('server listening on port',PORT)
})

server.get('/',(req,res)=>{
    res.send("welcome to the server")
})