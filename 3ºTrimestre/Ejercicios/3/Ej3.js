n1=parseInt(prompt("Dame el n1"))
n2=parseInt(prompt("Dame el n2"))
operacion= prompt("Qué operación quieres realizar")

function Operando(operacion,n1,n2){

    
    switch(operacion){

        case "multiplicar":
            alert("El resultado de multiplicar "+n1 + " y "+n2+ " es;"+ (n1*n2) );
            break;
        
        case "sumar":
            alert("El resultado de sumar "+n1 + " y "+n2+ " es;" + (n1+n2) );
            break;

        case "restar":
            alert("El resultado de restar "+n1 + " y "+n2+ " es;"+ (n1-n2) );
            break;
    }

    return;

}
Operando(operacion,n1,n2);