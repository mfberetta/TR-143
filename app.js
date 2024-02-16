//Configuracion general del servidor
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const dotenv = require('dotenv')
dotenv.config()
/*-----------------------------------------------------------*/
//Router for TR Diagnostic
const routerTest = require('./src/routes/test.js')
app.use('/test', routerTest)
/*-----------------------------------------------------------*/
//puesta en escucha del servidor
const PORT = process.env.PORT || 80
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))

