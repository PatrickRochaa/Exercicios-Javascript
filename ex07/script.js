


function converter() {   
    var dolar = Number(window.prompt('Antes de mais nada. Quanto está a cotaçao do dólar agora?'))
    var res = window.document.getElementById('res')
    var quantia = Number(window.prompt('Quanto em R$ você tem para converter?'))    
    var converter = quantia/ dolar
    res.innerHTML = `Valor convertido e você  terá ${converter.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}`
}