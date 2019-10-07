const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/', (req, res)=>{
  res.send('Hi')
})

app.listen(port, function(){
  console.log(`listening on ${port}`);
});

module.exports = app;
