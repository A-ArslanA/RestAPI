import { Router } from 'express'
import PostController from '../controllers/PostController.js'

const router = Router()

// /{filename return picture from static}
// http://localhost:5000/7acd2c93-3133-492d-a147-0b76e9d2a0b8.jpg

router.get('/posts', PostController.getAll)


router.get('/posts/:id', PostController.getOne)


router.post('/posts', PostController.create)


router.put('/posts/', PostController.update)


router.delete('/posts/:id', PostController.delete)


export default router