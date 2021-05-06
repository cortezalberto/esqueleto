const express = require('express');
const app = express()
const port = 3000

const path = require('path');
const cookieParser = require('cookie-parser');

const session = require('express-session')

const indexRouter = require('./routes/index');




// view engine setup

app.set('view engine', 'ejs');

// Uso los Midddleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'cualquier palabra',
  resave: false,
  saveUninitialized: true,
}))

app.use('/', indexRouter);






app.listen(port, () => console.log('Example app listening on port'+ port))