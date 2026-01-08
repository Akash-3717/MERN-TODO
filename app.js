const ENV = process.env.NODE_ENV || 'production';
require('dotenv').config({
   path: `.env.${ENV}` });

// External Module
const express = require('express');
const Mongoose = require('mongoose')
//Local Module

const errorController = require('./controller/errorController');
const ItemRouter = require('./router/ItemRouter');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// const Mongo_Db_Url = "mongodb+srv://root:akash2003@akash.nnixybo.mongodb.net/airbnb?retryWrites=true&w=majority"; 
const Mongo_Db_Url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@akash.nnixybo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(ItemRouter)
app.use(errorController.get404)


const PORT = process.env.PORT || 3003;

mongoose.connect(Mongo_Db_Url)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
 

