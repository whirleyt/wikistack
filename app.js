const morgan= require('morgan');
const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const nunjucks= require('nunjucks');
const models = require('./models');
const db = require('./models').db;
const route = require('./routes');




models.db.sync({force: true})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);


// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


app.use('/', route)
