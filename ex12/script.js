function verificar(){
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<h1>Analisando os valores informados <h1>`
    var antes = Number(window.prompt('Qual era o produto?'))
    var depois = Number(window.prompt('Qual é o preço atualo do produto?'))
    if (antes > depois){
        var estado = `barato.`
        var diferenca = `caiu`
        var conta = antes - depois
        var variaçao = (antes-depois)*100/antes
        var sit = `baixo`
    } else{
        var estado = `caro.`
        var diferenca= 'subiu'
        var conta = depois - antes
        var variaçao = (depois-antes)/antes*100
        var sit = 'cima'
    }


    res.innerHTML = `<p>O produto custava ${antes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${depois.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Hoje o produto está mais ${estado}</p>`
    res.innerHTML += `<p>O preço ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} ${conta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em diferança ao preço anterior.</p>`
    res.innerHTML += `<p>Uma variaçao de ${variaçao.toLocaleString('pt-BR')}% pra ${sit}</p>`

}