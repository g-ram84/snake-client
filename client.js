const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    //successfully connected to server
    console.log('Successfully connected to the game server', data);
  });

  return conn;
  
};
module.exports = {connect};