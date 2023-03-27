//const robotron = document.querySelector("#robotron"); // quero que a constante chamada robotron pegue o documento robotron
//robotron.addEventListener("click", (evento) =>{ // 
//    console.log(evento)
//}); // dai o robotron vamos colocar um evento de ouvir que vai ser um click e o click vai ser a funçao diz oi, mas tambem podemos colocar apenas uma funçao anonima que so vai funcionar naquele evento

//function dizOi(nome) { // quando queremos extrair um codigo especifico nos criamos uma função para trabalhar ele, a função nomeada pode ser chamada varias vezes
//    console.log("Oi" + nome)
//   console.log("Bem-Vindo ao Robotron 2000")
//}

//dizOi("Fernando")


const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}
function atualizaEstatisticas (peca) {
    console.log(pecas[peca])

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}