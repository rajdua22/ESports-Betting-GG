const {app, BrowserWindow, Menu} = require('electron');
const {ipcMain} = require('electron');
const {session} = require('electron');
const mysql = require('mysql');
const sqlSecretes = require('./src/credentials.js');

let currentGame = 1; // 1 for CSGO, 2 for LOL

let template = [{}, {
  label: 'Game Type',
  submenu: [{
    label: 'CS:GO',
    click: (item, window) => {
      if (window) {
        window.webContents.send('change-game', 'CS:GO');
      }
    }
  }, {
    label: 'LOL',
    click: (item, window) => {
      if (window) {
        window.webContents.send('change-game', 'LOL');
      }
    }
  }]
}];

const init = () => {
  let window = createWindow({
    title: 'ESports Betting Odds',
    width: 1000,
    height: 800
  });
  
  window.setResizable(false);
  window.loadFile('./view/index.html');
  window.on('closed', () => app.quit() );
}

ipcMain.on('login-succeed', (event, args) => {
  console.log(args);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

ipcMain.on('log', (e, args) => {
  console.log(args);
})

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