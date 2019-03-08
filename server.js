var express = require('express');
var cors = require('cors')
var app = express();
const path = require('path');
const spawn = require('child_process').spawn;

app.use(cors())
app.use(express.json())

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
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