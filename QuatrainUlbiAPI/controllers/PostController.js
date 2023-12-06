import Post from '../models/Post.js'
import * as uuid from 'uuid' // ID generate
import path from 'path'


const saveFile = async (file) => {
    try {
        const fileName = uuid.v4() + '.jpg'
        const filePath = path.resolve('static', fileName)
        await file.mv(filePath)
        return fileName
    }
    catch(e) {
        console.log(e)
    }
}


class PostController {
    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        }
        catch(e) {
            res.status(500).json(e)
        }
    }


    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'id IS not found'})
            }

            const post = await Post.findById(id)
            return res.json(post)
        }
        catch(e) {
            res.status(500).json(e)
        }
    }


    async create(req, res) {
        try {
            console.log(req.files)

            if (!req.files || !req.files.picture) {
                return res.status(400).json({ error: 'not found "picture" in query.' });
            }

            const picture = await saveFile(req.files.picture)
            const {author, title, content} = req.body
            const post = await Post.create({author, title, content, picture})
            return res.json(post)
        }
    
        catch(e) { // needly?
            res.status(500).json({ error: '500', message: e.message })
        }
    }


    async update(req, res) {
        try {
            const post = req.body

            if (!post._id) {
                res.status(400).json({message: 'id IS not found'})
            }
            
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost)
        }
        catch(e) {
            res.status(500).json(e)
        }
    }


    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'id IS not found'})
            }

            const deletedPost = await Post.findByIdAndDelete(id)
            return res.json(deletedPost)
        }
        catch(e) {
            res.status(500).json(e)
        }
    }
    
}

export default new PostController()