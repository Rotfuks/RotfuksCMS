import 'dotenv/config';
import './db';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authController from './controller/authController';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

app.post('/api/auth/login', authController.signin);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
