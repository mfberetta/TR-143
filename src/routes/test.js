import controllerTest from '../controllers/test.js'

/*-----------------------------------------------------------*/
import express from 'express'
const { Router } = express
const routerTest = new Router()
routerTest.use(express.urlencoded({ extended: true }))
//Servidor estático
routerTest.use('/download', express.static('public'))
/*-----------------------------------------------------------*/
 
routerTest.post('/upload', controllerTest.upload)

export default routerTest