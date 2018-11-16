const {app, BrowserWindow, Menu} = require('electron');
const { ipcMain } = require('electron');

const init = () => {
  Menu.setApplicationMenu();
  let window = createWindow({
    title: 'ESports Betting Odds',
    width: 1000,
    height: 800,
    resizeable: false
  });
  
  window.loadFile('./view/index.html');
  window.on('closed', () => app.quit() );
}

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