function somar(){
var produto = window.prompt(`Qual é o produto?`)
var valor = Number(window.prompt(`Qual o valor de ${produto}?`))
var pagamento = Number(window.prompt(`Qual o valor que voce forneceu para o pagamento?`))
var troco = pagamento - valor
window.alert(`Voce comprou ${produto} que custa ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Voce deu ${pagamento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco. Volte Sempre!!`)

}