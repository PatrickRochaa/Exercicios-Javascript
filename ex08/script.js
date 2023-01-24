function desconto(){
var res = window.document.getElementById('res')
var nome = window.document.getElementById('nome')
var desconto = (valor*10)/100
res.innerHTML = `<strong>Calculando o desconto de 10% para ${produto}<br><br></strong>`
var final = valor-desconto
res.innerHTML +=`O preço original era ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br><br>`
res.innerHTML += `Voce acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%)<br><br>`
res.innerHTML += `No fim, voce vai pagar ${final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} nosbox ${produto} <br><br>`


}