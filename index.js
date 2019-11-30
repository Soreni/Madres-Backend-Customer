require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/config/key');
const error = require('./src/middleware/error');




//DB Config
const db = config.MongoURI;
//Connect to Mongo
mongoose.connect(db,{useNewUrlParser:true, useFindAndModify: false })
.then(()=>console.log("MongoDb Connected ..."))
.catch(err=>console.log(err));

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// api routes
app.use('/api/v1/logins', require('./src/routes/login'));
app.use('/api/v1/verifys', require('./src/routes/verify'));
app.use('/api/v1/clients', require('./src/routes/clients'));
app.use('/api/v1/drivers', require('./src/routes/drivers'));
app.use('/api/v1/deliveryItems', require('./src/routes/deliveryItems'));
app.use('/api/v1/deliveryRequests', require('./src/routes/deliveryRequests'));
app.use('/api/v1/vehicles', require('./src/routes/vehicles'));
app.use('/apidoc', express.static('./apidoc'));

app.use(error);






app.listen(config.PORT,console.log(`server is running on port ...${config.PORT}`));