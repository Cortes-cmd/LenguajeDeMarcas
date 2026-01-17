class Conversor{

    

    Menu(){

        let opcion;
        do {
            const opcion = prompt("Conversor de unidades; \n 1.-Convertir Km a millas \n 2.- Convertir Celsius a Fahrenheit \n 3.- Salir del programa");

            switch(opcion){

                case "1":

                this.Km_Millas();

                break;

                case "2":

                this.Celsius_Fahrenheit();

                break;

                case "3":

                console.log ("Saliendo del programa");

                break;

                default:
                
                alert ("Opción no válida");
                
            } 

            
        }while (opcion !== 3);
    }

    Km_Millas(){

        let km = prompt("De cuántos km estamos hablando?");

        const C_millas = 0.621371;

        let millas = km * C_millas 

        console.log(km+ " KM son "+ millas + " Millas :)" );
    }

    Celsius_Fahrenheit(){

        let Celsius = prompt ("De cuántos Celsius estamos hablando?");

        const C_Fahrenheit = (Celsius * 9 / 5) + 32

        console.log(Celsius+ " Celsius son "+ C_Fahrenheit + " Fahrenheit :)" );
    }

    

}

const Convers = new Conversor();

Convers.Menu();

