import express from 'express';

const app = express();
const port = 4444;

app.get('/api/', function (req, res) {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
