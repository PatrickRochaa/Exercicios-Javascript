function somar(){
    var res = window.document.getElementById('res')
    var nome = window.prompt('Qual o nome do aluno?')
    var nota1 = Number(window.prompt(`Primeira Nota de ${nome}`))
    var nota2 = Number(window.prompt(`Qual a segunda nota de ${nome}?`))
    var media = (nota1+nota2)/2
    if (media <3){
        var nota = '<mark style= "background-color: red"> REPROVADO</mark>'
        var entre = 'abaixo'
    } else if (media >=3 && media <= 6){
        var nota = '<mark style= "background-color: yellow"> em RECUPERAÇÃO</mark>'
        var entre = 'entre 3,0 e 6,0'
    } else {
        var nota =  '<mark style= "background-color: lime">APROVADO</mark>'
        var entre = 'acima de 6,0'
    }
    res.innerHTML = `<h3>Analisando a situação de ${nome}</h3>`
    res.innerHTML += `<p>com as notas ${nota1} e ${nota2} a <strong>  média é ${media}</p>`
    res.innerHTML += `<p>com media ${entre}, o aluno está<p>`
    res.innerHTML += ` ${nota}`
}