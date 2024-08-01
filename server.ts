import express from 'express';
import path from 'path';

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'src/public')));
app.use('/styles', express.static(path.join(__dirname, 'src/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'src/scripts')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});