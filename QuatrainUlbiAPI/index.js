// "type": "module", IN package
// w MVC

import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import PostRouter from './routes/PostRouter.js'


const PORT = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use(fileUpload())
app.use(express.static('static'))
app.use('/api', PostRouter)


async function startApp() {
    try {
        await mongoose.connect(process.env.DB)
        app.listen(PORT, () => console.log('SERVER IS STARTED ON PORT ' + PORT))
    } 

    catch(e) {
        console.log(e)
    }
}

startApp()



