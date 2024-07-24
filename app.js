const express = require('express');
const app = express();
const { createServer } = require("http");
const cors = require('cors');
const AppRouter = require('./routes/appRouter');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');

const httpServer = createServer(app);

app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', AppRouter);

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));


httpServer.listen(5000, () => {
      console.log("Backend server is running!");
  })


module.exports = app;