const ipc = require('electron').ipcRenderer;

const tag = "<div class='match'>CSGO Match ### info</div>";


ipc.on('change-game', (e, args) => {
  document.getElementById('game-title').innerHTML = args + ' Matches';
  
  function csgofetch() {
    document.getElementById('ongoing').append(tag);
  }

  function lolfetch() {
    
  }
});

