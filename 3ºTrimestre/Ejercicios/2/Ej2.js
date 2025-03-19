
let nombre= prompt ("Mire parsero, cómo anda uhteh, cual e su nomvre")
console.log("Ey " + nombre+ " Pijas o raxetas?")
let nota1= parseInt(prompt("DAME LA PRIMERA NOTA MALPARÍO"))
let nota2= parseInt(prompt("Hallome aqui solicitando a mi ecuestre amigo la segunda nota"))
let nota3= parseInt(prompt("LARGGETGGBAEGHALGASÑJTIOHFGÑOIEATGHSDFZSE.GA,FGAGBHIK, tercera nota"))

function media(nota1,nota2,nota3){

    let Media = ((nota1 +nota2 +nota3)/3)

    if (Media <5 ) {
        console.log(Media+ " FALLASTE  ERES UNA VERGUENZA HUMANA")
    }else if (Media >= 5){

        console.log(Media + " SUFICIENTE loli")
    }else if (Media >= 7){

        console.log(Media+ " Notable Chulazo")
    } else if (Media >= 9){

        console.log(Media+ " SOBRESALE TU SALIENTE")
    } 
}

media(nota1,nota2,nota3);