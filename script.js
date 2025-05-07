document.addEventListener("DOMContentLoaded", function() {
    
    const botao = document.getElementById("botao")
    const mensagem = document.getElementById("mensagem")

    botao.addEventListener("click", function (){
        mensagem.textContent = "Olá, seja bem-vindo! Espero que goste do meu site."
    })
})