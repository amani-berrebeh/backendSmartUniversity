const express = require('express');
const app = express();
const { createServer } = require("http");
const cors = require('cors');
const AppRouter = require('./routes/appRouter');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const httpServer = createServer(app);
app.use(express.json());

dotenv.config();

app.use(cors());
app.use('/api', AppRouter);

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));


httpServer.listen(5000, () => {
      console.log("Backend server is running!");
  })


module.exports = app;