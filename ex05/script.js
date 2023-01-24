function converter(){
var res =  window.document.getElementById('res')
var metros = Number.parseFloat(window.prompt(`Informe uma distancia em metros`))
var km = (metros/1000)
var hm = (metros/100)
var dam = (metros/10)
var dm = (metros*10)
var cm = (metros*100)
var mm = (metros*1000)
res.innerHTML = `<strong>A distancia de ${metros.toLocaleString('pt-BR')} metros corresponde a</strong><br><br>` 
res.innerHTML += `${km.toFixed(3)} quilometros (Km)<br><br>`
res.innerHTML +=`${hm.toFixed(3)} hectometros (Hm)<br><br>`
res.innerHTML +=`${dam.toLocaleString('pt-BR')} decametros (Dam)<br><br>`
res.innerHTML +=`${dm.toLocaleString('pt-BR')} decimetros (Dm)<br><br>`
res.innerHTML +=`${cm.toLocaleString('pt-BR')} centimetros (Cm)<br><br>`
res.innerHTML +=`${mm.toLocaleString('pt-BR')} milimetros (mm)<br>`

}