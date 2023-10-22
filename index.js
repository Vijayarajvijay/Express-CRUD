const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const AppRouter = require('./src/routes')
const app = express()
app.use(express.json())

app.use('/',AppRouter)

app.listen(PORT,()=>console.log(`Server Listening to port ${PORT}`))


