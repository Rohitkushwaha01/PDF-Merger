const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const path = require('path');
const mergepdfs = require('./merge');
const app = express();
port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 2), async function(req, res, next){
    // console.log(req.files);
    // res.send({data: req.files});
    await mergepdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect("http://localhost:3000/merge/merged.pdf");
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});