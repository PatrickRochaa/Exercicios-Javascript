function desafio(){
    var nome = window.prompt("Qual o seu nome?")
    var idade = window.prompt(`Qual a sua idade?`)
    var res = document.getElementById("res")
    res.innerHTML = (`Que legal acabei de conhecer ${nome} que tem ${idade} anos.`)

}