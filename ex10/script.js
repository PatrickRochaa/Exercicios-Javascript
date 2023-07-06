

function calcular(){
    var res = window.document.getElementById('res')
    var valora = parseInt(prompt("Digite o valor de A: "));
    var valorb = parseInt(prompt("Digite o valor de B: "));
    var valorc = parseInt(prompt("Digite o valor de C: "));

    var quadradodeb = valorb * valorb;

    console.log(quadradodeb);

    var delta = quadradodeb - 4 * valora * valorc;

    console.log(delta);

    if (delta < 0) {
        res.innerHTML =("Não é possível calcular pois o Delta é menor que zero.");
      return;
    }

    if (delta == 0) {
        res.innerHTML =("O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>");
      return;
    }

    var valordebneg = valorb * (-1); /* INVERTE O SINAL DO B */

    var raizdedelta = Math.sqrt(delta); /* CALCULA A RAIZ DO DELTA, NO CASO, FEITO PELA FUNÇÃO Math.sqrt(variável) */

    var divisor = 2 * valora; /* CALCULA O DIVISOR, NO CASO QUE DIVIDIRÁ B + RAIZ DE DELTA */

    var resultadox1 = (valordebneg + raizdedelta) / divisor; /* CALCULA O X1 */

    var resultadox2 = (valordebneg - raizdedelta) / divisor; /* CALCULA O X2 */
    res.innerHTML = `<strong>Resolvendo Bhaskara</strong><br><br>`

    res.innerHTML =("∆ = B² - 4 X A X C<br>");
    res.innerHTML +=("∆ = " + quadradodeb + " - 4 X " + valora + " X " + valorb);
    res.innerHTML +=("<br>∆ = " + delta);

    res.innerHTML +=("<br>X = -B +ou- √∆ <br>__________________<br>      2 X A");
    res.innerHTML +=("<br> X = " + valordebneg + " +ou- " + raizdedelta + "<br>____________________<br>      2 X " + valora);
    res.innerHTML +=("<br><br>X1 = " + quadradodeb + " + " + raizdedelta + " / " + divisor);
    res.innerHTML +=("<br>X1 = " + resultadox1);

    res.innerHTML +=("<br><br>X2 = " + quadradodeb + " - " + raizdedelta + " / " + divisor);
    res.innerHTML +=("<br>X2 = " + resultadox2);
    window.alert("Não foi eu quem resolver este exercício, achei a solução na internet!!")
}
