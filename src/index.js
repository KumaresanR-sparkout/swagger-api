import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger-output.json'
import mainRouter from './routes/main.router'
env.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/v1', mainRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
});
