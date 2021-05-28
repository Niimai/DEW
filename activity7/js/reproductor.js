const canciones = [
    "Instant Crush.mp3",
    "Giorgio by Moroder.mp3",
    "Get Lucky.mp3"
]
var indiceActual = new Array(1)

function crearPlayList() {
    const listado = document.createElement('ol')
    listado.setAttribute("id", 'listadoMusica')
    for (let i = 0; i < canciones.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(canciones[i]))
        item.setAttribute("id", canciones.indexOf(canciones[i]))
        listado.appendChild(item)
    }
    return listado
}
document.getElementById('playList').appendChild(crearPlayList())

var listadoMusica = document.getElementById('listadoMusica')
listadoMusica.onclick = (e) => {
    const itemClick = e.target
    removeActive()
    itemClick.classList.add("active");
    reproduccionActual("Reproduciendo: " + itemClick.innerText)
    loadMusic(itemClick.innerText)
    player.play()
    indiceActual[0] = e.target.id
}

function nextMusic() {
    const source = document.getElementById('source');
    var musicaActual = Number(indiceActual[0]);
    if (canciones.length == (musicaActual + 1)) {
        var siguiente = 0
    } else {
        var siguiente = musicaActual + 1
    }
    removeActive()
    var item = document.getElementById(siguiente)
    item.classList.add("active");
    loadMusic(canciones[siguiente]);
    player.play()
    indiceActual[0] = siguiente
    reproduccionActual(canciones[siguiente])
}

function prevMusic() {
    const source = document.getElementById('source');
    var musicaActual = Number(indiceActual[0]);
    if (musicaActual == 0) {
        var anterior = canciones.length - 1
    } else {
        var anterior = musicaActual - 1
    }
    removeActive()
    var item = document.getElementById(anterior)
    item.classList.add("active");
    loadMusic(canciones[anterior]);
    player.play()
    indiceActual[0] = anterior
    reproduccionActual(canciones[anterior])
}

function removeActive() {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
    return elems
}


function reproduccionActual(texto) {
    document.getElementById('currentPlay').innerText = texto
}


function loadMusic(ruta) {
    var source = document.getElementById('source')
    var folder = "audio";
    source.src = folder + "/" + ruta
    var index = indiceActual[0] = canciones.indexOf(ruta)
    removeActive()
    var item = document.getElementById(index)
    item.classList.add("active");
    reproduccionActual(ruta)
    player.load()
}

window.onload = function() {
    var player = document.getElementById("player");
    document.getElementById("play").onclick = function() { player.play() }
    document.getElementById("pause").onclick = function() { player.pause() }
}

loadMusic(canciones[0])