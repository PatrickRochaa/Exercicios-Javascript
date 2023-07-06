function desconto(){
var produto = window.prompt('Qual é o produto que está comprando?')
var valor = Number(window.prompt(`Qual o valor de ${produto}`))
var res = window.document.getElementById('res')
var nome = window.document.getElementById('nome')
var desconto = (valor*10)/100
res.innerHTML = `<strong>Calculando o desconto de 10% para ${produto}<br><br></strong>`
var final = valor-desconto
res.innerHTML +=`<p>O preço original era ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
res.innerHTML += `<p>Voce acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%)</p>`
res.innerHTML += `<p>O novo valor do ${produto} será ${final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`


}