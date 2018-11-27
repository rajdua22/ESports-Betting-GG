const ipc = require('electron').ipcRenderer;
const mysql = require('mysql');
const secrete = require('./credentials.js');

function login() {
  ipc.send('login-succeed', {userId: 0});
  window.location = 'matches.html';
}