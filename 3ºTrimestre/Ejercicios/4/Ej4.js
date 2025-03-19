alojamiento=parseInt(prompt("Cuánto crees que gastarás de alojamiento?"))
alimentacion=parseInt(prompt("Cuánto crees que gastarás de alimentación?"))
entretenimiento=parseInt(prompt("Cuánto crees que gastarás de entretenimiento?"))

function Total(alojamiento,alimentacion,entretenimiento){

    Coste_Total= alojamiento+alimentacion+entretenimiento;

    alert("Tu coste total aproximado será; "+ Coste_Total);


}

Total(alojamiento,alimentacion,entretenimiento);