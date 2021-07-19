var capital=prompt("Introduzca el capital solicitado");
var interes=prompt("Indique el interes anual o tasa");
var anios=prompt("Introduzca el numero de años");

function calcularIntereses(cap, int, ani){
    var a=ani*12;
    var i=int/1200;
    
    
    var factor = Math.pow(i+1,a);
    var cuota= cap*i*factor/(factor-1);
    
    alert("La cuota de "+capital + " a " +a+ " meses y interés mensual de "+i*100+"% es " + cuota);

}

calcularIntereses(capital, interes, anios);