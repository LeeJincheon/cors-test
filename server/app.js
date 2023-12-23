const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET, POST, OPTIONS',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'hello get' });
});

app.post('/', (req, res) => {
    const data = req.body;
    res.status(200).json(data);
})

app.listen(4400, () => {
    console.log('server is running on port 4400!');
})