const express = require("express")
const cors = require("cors")
const fs = require("fs")
const app = express();
app.use(cors())
const hostPath = "127.0.0.1";
const host = 3000;
app.get('/init', (req, res) => {
    fs.readdir('data', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            let back = {
                data,
                len: data.length
            }
            res.send(back)
        }
    })
})
app.get('/add', (req, res) => {
    let { fileName } = (req.query);
    fs.createWriteStream('data/' + fileName, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            let back = {
                data: "create success"
            }
            res.send(back)
        }
    })
})
app.use(express.json())
app.listen(host, hostPath, () => {
    console.log(`Server is running at http://${hostPath}:${host}/`)
})