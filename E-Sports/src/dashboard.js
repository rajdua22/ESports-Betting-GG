// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ipc = require('electron').ipcRenderer

ipc.on('crypto-data', function (event, arg) {
    refreshTable(arg)
})

function refreshTable(arg){
    document.getElementById('main').innerHTML = '';
    for(const match in arg){
        const tmatch = arg[match]
        const img = tmatch.league.image_url
        const sport = tmatch.videogame.name
        const series = tmatch.serie.full_name
        let newElement = `
        <div class="crypto">
            <div class="crypto-info">
                <img class="crypto-img" src  = "${img}"/>
                <span class="crypto-name">${tmatch.name}</span>
            </div>
            <div class="crypto-price">Sport: ${sport}</div>
            <div class="crypto-change ${series}">${tmatch.begin_at}</div>
            <button class="btn btn-popout" id="btn-popup-${tmatch.slug}">More Info</button>
        </div>`
        document.getElementById('main').innerHTML += newElement
    }
    const popoutBtns = document.querySelectorAll('.btn-popout')
    for(let i = 0; i < popoutBtns.length; i++){
        const popoutBtn = popoutBtns[i]
        popoutBtn.addEventListener('click', (event) => {
            const btnId = event.target.id.substring(10);
            ipc.send('crypto-popout', btnId)
        })
    }
}