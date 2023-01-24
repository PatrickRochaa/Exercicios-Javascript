function converter(){
var res = window.document.querySelector("div#res")
var temp = Number.parseFloat(window.prompt('Digite uma temperatura em ˚C (Celsius)'))
var kel = 273.15+temp
var fah = (temp * 1.8)+32

res.innerHTML = `<strong>A temperatura de ${temp}˚C, corresponde a: </strong><br><br>`
res.innerHTML += `<strong> ${kel.toLocaleString('pt-BR')}'K (Kelvin)</strong><br><br>`
res.innerHTML += `<strong> ${fah}'F (fahrenheit)</strong><br><br>`

}