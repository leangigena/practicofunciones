var capital=prompt("Introduzca el capital solicitado");
var interes=prompt("Indique el interes anual o tasa");
var anios=prompt("Introduzca el numero de años");

var a=anios*12;
var i=interes/1200;


var factor = Math.pow(i+1,a);
var cuota= capital*i*factor/(factor-1);

alert("La cuota de "+capital + " a " +a+ " meses y interés mensual de "+i*100+"% es " + cuota);