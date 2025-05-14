let aforoMaximo = 50;
let personasDentro = 0;
let ingresosTotales = 0;

function calcularPrecio(colectivo) {
    const precioBase = 12;
    switch (colectivo.toLowerCase()) {
        case "estudiante":
            return precioBase * 0.5;
        case "jubilado":
            return precioBase * 0.6;
        case "desempleado":
            return precioBase * 0.7;
        case "ninguno":
        default:
            return precioBase;
    }
}

function accederEvento() {
    while (personasDentro < aforoMaximo) {
        const edad = parseInt(prompt("Introduce tu edad (o escribe 0 para salir):"));
        if (edad === 0 ) break;

        let colectivo = prompt("¿Perteneces a algún colectivo? (estudiante, jubilado, desempleado, ninguno)").toLowerCase();

        if (!["estudiante", "jubilado", "desempleado", "ninguno"].includes(colectivo)) {
            alert("Colectivo no válido. Se aplicará tarifa normal.");
            colectivo = "ninguno";
        }

        const precio = calcularPrecio(colectivo);
        ingresosTotales += precio;
        personasDentro++;

        alert(`Entrada permitida. Precio: ${precio.toFixed(2)} €\nPersonas dentro: ${personasDentro}/${aforoMaximo}\nIngresos totales: ${ingresosTotales.toFixed(2)} €`);
    }

    if (personasDentro >= aforoMaximo) {
        alert("Aforo completo. No se permite más entrada.");
    }

    alert(`Evento cerrado:\nTotal personas: ${personasDentro}\nIngresos totales: ${ingresosTotales.toFixed(2)} €`);
}


accederEvento();


