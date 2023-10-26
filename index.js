const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// middlewere
app.use(cors())
app.use(express.json())

// create get method
app.get('/', (req, res)=> {
    res.send('coffee server is running')
})


app.listen(port, ()=> {
    console.log(`port is on : ${port}`);

    
})