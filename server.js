const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const path = require('path');
const app = express();
port = 3000;

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 10), function(req, res, next){
    console.log(req.files);
    res.send({"data": req.files});
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});