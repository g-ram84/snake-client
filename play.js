const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    //successfully connected to server
    console.log('you ded cuz you idled');
    conn.write('');
  });

  return conn;
  
};


console.log('Connecting ...');
connect();