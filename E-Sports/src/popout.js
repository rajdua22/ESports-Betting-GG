// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require('electron').ipcRenderer

let targetmatch

ipc.on('crypto-info', function (event, arg) {
    targetmatch = arg
})

ipc.on('crypto-data', function (event, arg) {
    let amatch
    for(const match in arg){
        if(arg[match].slug === targetmatch){
            amatch = arg[match]
            break
        }
    }
    const myName = amatch.name
    const league = amatch.league.name
    const status  = amatch.status
    const img = amatch.league.image_url
    const link = amatch.league.url
    const games = amatch.number_of_games
    const tourney = amatch.tournament.name

    document.getElementById('main').innerHTML = `
    <div class="name">Match: ${myName}</div>
    <div class = "league">Games: ${games}</div>
    <div class="league">League: ${league}</div>
    <div class = "league">Tourney: ${tourney}</div>
    <div class ="league">Status: ${status}</div>
    <div class = "league">Link: <a href=${link}>${link}</a></div>
     `
})