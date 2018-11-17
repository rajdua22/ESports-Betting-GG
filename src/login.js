const ipc = require('electron').ipcRenderer;
const mysql = require('mysql');
const secrete = require('./credentials.js');

let conn = mysql.createConnection(secrete);

conn.connect;

function show() {
  conn.query('SELECT 1 + 1 AS solution', (err, rs, fields) => {
    if (err)
      throw err;
    console.log('The solution is: ', rs[0].solution);
    ipc.send('login-succeed', {res: rs[0].solution});
  })
  window.location = 'matches.html';
}