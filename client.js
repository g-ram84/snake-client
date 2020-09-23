const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    //successfully connected to server
    console.log('you ded cuz you idled');
    conn.write('');
  });

  return conn;
  
};
module.exports = {connect};