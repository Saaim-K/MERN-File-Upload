import express from 'express'
import multer from 'multer'

const app = express()
const port = process.env.PORT || 4444

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/upload', (req, res) => {
    res.send('Image Uploaded!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})