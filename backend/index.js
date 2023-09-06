const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mondoDB=require('./db')
const mongoDB = require('./db')
mongoDB()
//-----------------------------------------
const cors = require("cors")
const cookieParser = require("cookie-parser")
app.use(cors())
app.use(cookieParser())

//--------------------------------



/**app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Wish, Content-Type, Accept"
  )
  next()
})*/

//use this or gives cors error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json());

//api end points----------------------------------------------------------------------------------------------
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))
//------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})



