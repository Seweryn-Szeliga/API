const express = require('express');
const app = express();
const {port} = require('./config');

//routes
const apiRouter = require('./routes/api')

app.use('/api',apiRouter);







app.listen(port,function(){
    console.log(`serwer is listening...${port}`);
});