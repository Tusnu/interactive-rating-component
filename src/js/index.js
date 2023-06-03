const primeiro = document.querySelector(".primeira")

const segundo = document.querySelector(".segunda")

const enviar = document.getElementById("envio")

const recomecar = document.getElementById("recomecar")

const notas = document.querySelectorAll(".opcoes")

const notaAtual = document.getElementById("avaliacao")

enviar.addEventListener("click", () => {
    segundo.classList.remove("esconder")
    primeiro.style.display = "none"

    notas.forEach((avaliacao) => {
        avaliacao.addEventListener("click", () => {
            notaAtual.innerHTML = avaliacao.innerHTML
        })
    })
})


recomecar.addEventListener("click", () => {
    primeiro.style.display = "block"
    segundo.classList.add("esconder")
})