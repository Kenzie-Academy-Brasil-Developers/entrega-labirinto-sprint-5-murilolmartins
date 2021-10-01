const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let newid = 1

map.forEach(criarparedes)

function criarparedes(palavra) {
    const jogo = document.querySelector(".jogo")
    let newline = document.createElement("section")
    jogo.appendChild(newline)
    newline.classList.add("linha")
    for (let i = 0; i < palavra.length ;i++) {
        if (palavra[i] === "W") {
            const newblock = document.createElement("div")
            newline.appendChild(newblock)
            newblock.classList.add("parede")
            newid++
        }
        else if (palavra[i] === "S") {
            const newblock = document.createElement("div")
            const newimg = document.createElement("img")
            newimg.src = "img/1200px-Coritiba_FBC_(2011)_-_PR.svg.png"
            newimg.classList.add("personagem") 
            newblock.classList.add("start")
            newblock.id = `vazio${newid}`
            newblock.appendChild(newimg)
            newline.appendChild(newblock)
            newid++
        }
        else if (palavra[i] === "F") {
            const newblock = document.createElement("div")
            newblock.classList.add("end")
            newblock.id = `vazio${newid}`
            newline.appendChild(newblock)
            newid++
        } 
        else {
            const newblock = document.createElement("div")
            newblock.classList.add("vazio")
            newblock.id = `vazio${newid}`
            newline.appendChild(newblock)
            newid++

        }

    }
}

document.addEventListener("keydown", moverpersonagem)


function moverpersonagem(event) {
    const personagem = document.querySelector("img")
    const personagemid = document.querySelector("img").parentNode.id.replace("vazio","")
    let tecla = event.key

    if(event.key == "ArrowUp") {
        let novovolocal = document.querySelector(`#vazio${Number(personagemid) - 21}`)
        if (novovolocal !== null) {
            novovolocal.appendChild(personagem)
            verificarvitoria(novovolocal)
        }


    }
    if(event.key == "ArrowRight") {
        let novovolocal = document.querySelector(`#vazio${Number(personagemid) + 1}`)
        if (novovolocal !== null) {
            novovolocal.appendChild(personagem)
            verificarvitoria(novovolocal)

        }
    }
    if(event.key == "ArrowLeft") {
        let novovolocal = document.querySelector(`#vazio${Number(personagemid) - 1}`)
        if(personagem.parentNode.className === "start") {

       }
        else if (novovolocal !== null) {
            novovolocal.appendChild(personagem)
            verificarvitoria(novovolocal)

        }
    }
    if(event.key == "ArrowDown") {
        let novovolocal = document.querySelector(`#vazio${Number(personagemid) + 21}`)
        if (novovolocal !== null) {
            novovolocal.appendChild(personagem)
            verificarvitoria(novovolocal)
    } 
}

}

function verificarvitoria(personagem) {
    if (personagem.className == "end") {
        const ganhou = document.querySelector("body")
        ganhou.innerHTML = ""
        let vitoria = document.createElement("div")
        vitoria.innerText = "PARABÉNS!!\n VOCÊ LEVOU O CORITIBA PARA\n A SÉRIE A"
        vitoria.classList.add("vitoria")
        ganhou.appendChild(vitoria)
        ganhou.style.backgroundColor = "black"

    }

}