import express from 'express'
import * as sampleSwagger from '../controllers/sample-swagger.controller'
const router = express.Router()

router.post('/user', sampleSwagger.swaggerPostExample)
router.get('/user', sampleSwagger.swaggerGetExample)

export default router
