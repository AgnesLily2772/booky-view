import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/routes.js';
import path from 'path';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);

if ( process.env.NODE_ENV == "production"){

  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })

}


const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://nesly:nesly2772@cluster0.f2fvl.mongodb.net/bookyViewDB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 2772;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
// mongoose.set('useFindAndModify', false);
