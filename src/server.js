import express from 'express';
import 'dotenv/config';

const app = express();

const port = 3000;

app.get('/home', (req, res) => {
    return res.send("a" + process.env.DB_HOST);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))