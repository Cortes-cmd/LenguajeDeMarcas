class Cajero{

    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    Menu(){
        let opcion;

        do{
            opcion = prompt("Menú ---------------------------- \n 1.- Ingresar Dinero \n 2.- Retirar dinero \n 3.- Consultar saldo\n 4.- Salir del programa");

            switch(opcion){

                case "1":

                this.Ingresar();
                break;

                case "2":

                this.Retirar();
                break;

                case "3":

                this.Consultar();
                break;
                
                case "4":

                console.log("Saliendo del programa");
                break;

                default:
                console.log ("No existe tal opción");
            }
        } while (opcion!=="4");
    }

    Ingresar(){


        let suma= parseFloat(prompt("Cúanto quieres añadir"));

        this.saldo = this.saldo + suma;

        console.log ("Has añadido\n" + suma + " € a tu cuenta bancaria\n Actualmente dispones de " + this.saldo+ " €" );

    }

    Retirar(){

        let resta = parseFloat(prompt("Cuánto quieres restar?"));

        if (resta > this.saldo){
            console.log ("No puedes restar una cantidad que no tienes");
        } else{
            this.saldo = this.saldo - resta;

            console.log ("Has restado\n" + resta + " € a tu cuenta bancaria\n Actualmente dispones de " + this.saldo+ " €" );

        }
    }
    

    Consultar(){

        console.log ("Dinero disponible --->\n "+ this.saldo);
    }

}

let Cash = new Cajero("Pablo",1000);

Cash.Menu();