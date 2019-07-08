const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose')

const productRoute = require('./product.route');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://AayaHassan:P@ssw0rd@product-9xspu.mongodb.net/Ureed', { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});