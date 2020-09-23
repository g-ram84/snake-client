const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    //successfully connected to server
    console.log('Successfully connected to the game server');
    conn.write('Name: GMC');
  });

  return conn;
  
};
module.exports = {connect};