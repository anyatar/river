import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

/*mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));*/


app.use(cors());
app.use('/', router);

/*
app.use('/api/hello-world', (req, res) => {
  res.send('Hello, world!');
})*/

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
