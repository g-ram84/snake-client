const {connect} = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function() {
  stdin.on('data', (data) => {
    if(data == '\\q\n') {
      process.exit();
    }
    client.write(data);
  })
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};