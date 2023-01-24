function converter() {
    var res = window.document.getElementById('res')
    var quantia = Number(window.prompt('Quanto voce tem R$ para converter?'))    
    var converter = quantia/ dolar
    res.innerHTML = `<strong>Valo convertido e voce terá ${converter.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</strong>`
}