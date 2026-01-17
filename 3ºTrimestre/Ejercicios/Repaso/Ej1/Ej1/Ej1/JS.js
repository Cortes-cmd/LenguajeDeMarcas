function menu(){
    const opcion= parseInt(prompt("-----Menu------\n 1 - Temperatura\n 2 - Longitud \n 3 - Peso"));
    switch(opcion){
        case 1:
            Temperatura()
            break;
        case 2:
            Longitud()
            break;
        case 3:
            Peso()
            break;
        default:

            break;
    }
}

function Temperatura(){
    const temp = parseFloat(prompt("Que temperatura quiere convetir: "))
    let conv = ((temp *9/5)+32)
    alert(conv);
}

function Longitud(){
    const metros = parseFloat(prompt("Cúantos metros quieres pasar a millas"))
    let conv = (metros * 0.00062137)
    alert(conv);
}

function Peso(){
    const peso = parseFloat(prompt("Cúantos kilos quieres pasar a libras"))
    let conv = (peso * 2.20462)
    alert(conv);
}

menu();