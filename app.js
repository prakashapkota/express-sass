var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();
app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
app.use('/public', express.static(path.join(__dirname, 'public')));


var port = Number(process.env.PORT || 5000);

app.listen(port);


