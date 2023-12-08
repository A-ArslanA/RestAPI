import express from 'express'
import 'dotenv/config'
import userRouter from './routes/userRouter.js'
import postRouter from './routes/postRouter.js'

const PORT = process.env.PORT || 8080

const app = express()


app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, () => console.log('SERVER LISTENING ON PORT: ' + PORT))