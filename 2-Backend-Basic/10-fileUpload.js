import express from 'express'
const app = express()


import multer from 'multer'
const upload = multer({
    dest : 'images'
})
app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})

app.listen(3000)

