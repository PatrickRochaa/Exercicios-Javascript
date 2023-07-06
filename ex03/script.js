function calcular(){
    var res = window.document.getElementById("res")
    var num = Number(window.prompt("Informe um numero inteiro"))
    var antes = num-1
    var depois = num+1
    res.innerHTML = (`<p>O antecessor de ${num}, é o número ${antes}</p>`)
    res.innerHTML += (`<p>O sucessor de ${num}, é o número ${depois}</p>`)
}