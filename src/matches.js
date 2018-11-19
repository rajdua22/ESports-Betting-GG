const ipc = require('electron').ipcRenderer;

const tag = "<div class='match'>CSGO Match ### info</div>";
const func = {
  'CS:GO': csgoFetch,
  'LOL': lolFetch
}

ipc.on('change-game', (e, args) => {
  document.getElementById('game-title').innerHTML = args + ' Matches';
  func[args]();
});

function csgoFetch() {
  let tag = document.createElement('div');
  tag.className = 'match';
  tag.innerHTML = 'CSGO Match ###';
  document.getElementById('ongoing').append(tag);
}

function lolFetch() {

}