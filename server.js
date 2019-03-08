var express = require('express');
var cors = require('cors')
var app = express();
const spawn = require('child_process').spawn;

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/getlyrics', function (req, res) {
    const name = req.body.name
    const artist = req.body.artist
    const pythonProcess = spawn('python', ["genius.py", name, artist]);
    pythonProcess.stdout.on('data', (data) => {
        res.send(data);
    });
    
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});