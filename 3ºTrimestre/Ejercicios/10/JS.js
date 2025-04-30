//Análisis de notas de clase: Crea un programa que reciba una lista de estudiantes con sus notas (puede ser un array de objetos). 
// Calcula y muestra la media de la clase, la nota más alta, la más baja y cuántos han aprobado.

class NOTAS{


    notas = new Array();

    constructor(){

        this.notas = [
            { nombre: "Ana", nota: 2 },
            { nombre: "Luis", nota: 5 },
            { nombre: "Eva", nota: 2 },
            { nombre: "Juan", nota: 7 },
            { nombre: "Marta", nota: 9 },
            { nombre: "Sergio", nota: 9 },
            { nombre: "Laura", nota: 1 },
            { nombre: "Carlos", nota: 2 },
            { nombre: "Nuria", nota: 1 },
            { nombre: "Pepe", nota: 2 },
            { nombre: "Rosa", nota: 5 },
        ];
    }

    Media(){

        let suma = 0;

        for (let estudiante of this.notas){

            suma = suma + estudiante.nota;
        }

        let media = suma/this.notas.length;

        console.log ("La media de la clase es;\n" + media );

    }

    Nota_Alta(){

      let Nota= this.notas[0].nota;

      for (let estudiante of this.notas){

        if(estudiante.nota > Nota){
            Nota = estudiante.nota;
        }

      }

      console.log("La nota más alta es; " + Nota);
    
    }
    

    Nota_Baja(){

        let notaBaja= this.notas[0].nota;

        for (let estudiante of this.notas){
            
            if(estudiante.nota < notaBaja){

                notaBaja  = estudiante.nota;
            }

        }

        console.log("La nota más baja es; " + notaBaja );


    }

    Aprobados(){

        let Aprobados = 0;

        for (let estudiante of this.notas){

            if (estudiante.nota >= 5){

                Aprobados = Aprobados + 1
            }
        }

        console.log("Los aprobados han sido ; " + Aprobados);


    }

}

let Notario = new NOTAS(2,5,2,7,9,9,1,2,1,2,5,7,8,5,4,7)



Notario.Media();

Notario.Nota_Alta();

Notario.Nota_Baja();

Notario.Aprobados();