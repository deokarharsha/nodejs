var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Nature looks beautiful.....', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
