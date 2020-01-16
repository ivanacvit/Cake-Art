require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const { v4 } = require('uuid');

const app = express();
const port = process.env.PORT || 4000;

const pusher = new Pusher({
  appId: 932366,
  key: "f848aff7e12a3bd424b1",
  secret: "c3d0ee36c577b35ac3eb",
  cluster: 'eu',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/comment', (req, res) => {
  const { body } = req;
  const data = {
    ...body,
    id: v4(),
    timestamp: new Date(),
  };
  pusher.trigger('post-comment', 'new-comment', data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});