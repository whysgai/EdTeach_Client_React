var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'build')))

//app.get("/", (req, res) => {
//    res.sendFile(`${__dirname}/public/index.html`)
//})


app.listen(process.env.PORT || 3000)
//app.listen(3000)
