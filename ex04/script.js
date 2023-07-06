function somar(){
let res = document.getElementById("res")
var produto = window.prompt(`Qual é o produto?`)
var valor = Number(window.prompt(`Qual o valor de ${produto}?`))
var pagamento = Number(window.prompt(`Qual o valor que voce forneceu para o pagamento?`))
var troco = pagamento - valor
res.innerHTML =(`<p>Voce comprou ${produto} que custa ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`)
res.innerHTML +=(`<p>Você deu ${pagamento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`)
res.innerHTML +=(`<p>e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.</p>`)
res.innerHTML +=(`Volte Sempre!!`)

}