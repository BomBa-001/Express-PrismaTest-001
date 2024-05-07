const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
  // res.sendFile(resolve(__dirname, `<h1>hello in Express Prisma Test v001</h1>`));
  // res.send(`<h1>hello in Express Prisma Test v001</h1>`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
