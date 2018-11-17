const {app, BrowserWindow, Menu} = require('electron');
const {ipcMain} = require('electron');
const {session} = require('electron');
const mysql = require('mysql');
const sqlSecretes = require('./src/credentials.js');

let conn = mysql.createConnection(sqlSecretes);

conn.connect(err => {
  console.log(err);
});

let template = [{}, {
  label: 'Game Type',
  submenu: [{
    label: 'CS:GO',
    click: () => {}
  }, {
    label: 'LOL',
    click: () => {}
  }, {
    label: 'NBA',
    click: () => {}
  }]
}];

const init = () => {
  const menu = Menu.buildFromTemplate(template);
  let window = createWindow({
    title: 'ESports Betting Odds',
    width: 1000,
    height: 800,
    resizeable: false
  });
  
  window.loadFile('./view/index.html');
  window.on('closed', () => app.quit() );
}

ipcMain.on('login-succeed', (event, args) => {
  console.log(args);
});

const createWindow = params => {
  const win = new BrowserWindow(params)
  let winId = win.id;
  /*
      Each window has a unique id. 
      We can use this unique id as the key to store the window reference in `windows` object
  */
  // windows[winId] = win

  /*
      This is fired when the window `win` is closed. 
      We want to remove the reference to this window from `windows` object
  */
  win.on('closed', () => {
      // delete windows[winId]
  })

  // return the newly created window so we can modify it right after calling this function
  return win;
}

app.on('ready', init);