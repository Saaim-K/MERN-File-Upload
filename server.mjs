import express from 'express'
import multer from 'multer'

const app = express()
const port = process.env.PORT || 4444

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage }).array('image')

app.post('/upload', upload, (req, res) => {
    res.send('File Uploaded!')
    console.log(req.file)
    if (!req.file) {
        res.status(400).send("Image not uploaded")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})