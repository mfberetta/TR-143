const express = require('express')
const { Router } = express
const routerTest = new Router()
routerTest.use(express.urlencoded({ extended: true }))
//Servidor estático
routerTest.use('/download', express.static('public'))
/*-----------------------------------------------------------*/
 
routerTest.post('/upload', (req, res, next) => {
    try{
        res.send('Data Received post')
    }
    catch (error){
        next(error)
    }
})

routerTest.put('/upload', (req, res, next) => {
    try{
        res.send('Data Received put')
    }
    catch (error){
        next(error)
    }
})

module.exports = routerTest
