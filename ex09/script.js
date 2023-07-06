function somar(){
    var res = window.document.getElementById('res')
    var nome = window.prompt('Qual o nome do Funcionario')
    var salario = Number(window.prompt(`Qual o salario de ${nome}?` ))
    var reajuste = Number(window.prompt(`Qual vai ser a porcentagem que o salario de ${nome} será aumentado`))
    var calculo = (salario*reajuste)/100
    var novosal = salario + calculo
    res.innerHTML = `<p><strong>${nome} recebeu um aumento salarial </strong></p>`
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>com um aumento de ${reajuste}%, o salário vai aumentar ${calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mes.</p>`
    res.innerHTML += `<p>E a partir do próximo mês , ${nome} vai passar a ganhar ${novosal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`

}
