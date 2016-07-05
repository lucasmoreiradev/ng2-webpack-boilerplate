'use strict';

const app = require('./app');
const http = require('http');

let port = process.env.PORT || 9000;

if(process.env.NODE_ENV !== 'production') {
  require('./webpack').bindTo(app);
}

let httpServer = http.createServer(app);

httpServer.on('error', (err) => {
  console.log(err)
});

httpServer.on('listening',  () => {
  console.log('Express server is listening on ' + httpServer.address().port);
});

httpServer.listen(port, () => {
  console.log('Working');
});
