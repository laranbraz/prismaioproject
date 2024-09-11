const express = require('express');
const { router } = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    return res.json({ hello: 'world' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
