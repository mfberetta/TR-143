//Configuraci general del servidor
import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())

import dotenv from 'dotenv'
dotenv.config()
/*-----------------------------------------------------------*/
//Router for TR Diagnostic
import routerTest from './src/routes/test.js'
app.use('/test143', routerTest)
/*-----------------------------------------------------------*/
//puesta en escucha del servidor
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))

