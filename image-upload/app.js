const express = require('express');
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+path.extname(file.originalname))
    },
})

const upload = multer({storage:storage})

app.set("view engine","ejs")

app.get('/upload', (req, res) => res.render('upload'))
app.post("/upload",upload.single('image') , (req, res) => res.send("Image Uploaded"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))