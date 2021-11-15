const readline = require('readline-sync');

const stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding('utf8');

// on any data into stdin
stdin.on('data', function (key) {
  // ctrl-c ( end of text )
  if (key === '\u0003' || key === 'q') {
    process.exit();
  }
  console.log({ key: key })
});