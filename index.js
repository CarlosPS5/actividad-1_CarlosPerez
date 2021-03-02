const express = require('express')
const morgan = require('morgan')




//Initialize the server
const app = express()

//settings
app.set('port', 4200)

//middlewares
app.use(express.json())
app.use(morgan('dev'))

const myRouter = require('./src/routes')
app.use('/',myRouter)
app.use(express.static('public'))


//Listen port
app.listen(app.get('port'), () => {
    console.log("Server running on port: ", app.get('port'))
})
