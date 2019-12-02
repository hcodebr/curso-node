const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 5);
  setImmediate(() => {
    console.log('immediate');
  });
});