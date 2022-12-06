const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 5000;

app.use(bodyParser.json())
app.use(cors())

require("./api")(app)
require("./git")(app)


app.get('/', (req,res) =>{
    res.json({
        message: 'Backend'
    })
})

app.listen(port, () => {
    console.log('App is running') })