const express = require('express')
const app = express()
const port = 3000

const login = require('./login')
const encoder = require('./encoder')
const auth = require('./middleware/authorization')

app.use(express.json())

app.post('/login', login)
app.post('/encoder', auth, encoder)

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});
app.get('/index.js', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.js');
});
app.get('/get_home', auth, (req, res) => {
    res.status(200).sendFile(__dirname + '/get_home.html');
});
app.get('/get_home.js', (req, res) => {
    res.status(200).sendFile(__dirname + '/get_home.js');
});
app.get('/home', (req, res) => {
    res.status(200).sendFile(__dirname + '/home.html');
});
app.get('/home.js', (req, res) => {
    res.status(200).sendFile(__dirname + '/home.js');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))