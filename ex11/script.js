function verificar(){
var res = window.document.getElementById('res')
var ano = Number(window.prompt('Qula é o ano que voce quer verficar?'))
res.innerHTML = ""
res.innerHTML +=`<h1>Analisando o ano de ${ano}...</h1>`
if( ano%4== 0 && ano%100 != 0 || ano%400 == 0  ){
    var sit = `<mark style= "background-color: lime">É BISSEXTO</mark> &#9989;`
} else{
    var sit = '<mark style= "background-color: red">NAO É BISSEXTO</mark> &#10060;'
}
res.innerHTML += `O ano de ${ano} ${sit}`
}