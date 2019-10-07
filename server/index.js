const express = require('express');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res)=>{
  res.send('Hi')
})

app.listen(port, function(){
  console.log(`listening on ${port}`);
});

module.exports = app;
