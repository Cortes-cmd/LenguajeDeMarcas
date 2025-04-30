//Agenda de contactos: Crea una estructura de datos para guardar varios contactos con nombre, teléfono y correo electrónico. 
// Implementa funciones para añadir, buscar y eliminar contactos por nombre.

class Agenda{


    contactos = new Array();

    constructor(){

        this.contactos = [];
    }

    Menu(){
        let opcion;

        do{
            opcion = prompt("Menú ---------------------------- \n 1.- Ingresar Contacto \n 2.- Retirar Contacto \n 3.- Consultar Contacto\n 4.- Salir del programa");

            switch(opcion){

                case "1":

                this.Ingresar();
                break;

                case "2":

                let name = prompt("Qué nombre quieres eliminar");

                this.Retirar(name);
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

        let Nombre = prompt("Qué nombre tiene el nuevo contacto?")
        let Telefono = parseInt(prompt("Qué telefono tiene el nuevo contacto?"));
        let Correo = prompt("Qué Correo tiene el nuevo contacto?")

        this.contactos.push({nombre: Nombre,telefono: Telefono,correo: Correo});

        console.log ("Has añadido a \n" + Nombre + "  a tus contactos\n Actualmente los contactos son; \n" + this.contactos );

    }

    Retirar(name){

        const index = this.contactos.findIndex(contacto => 
            contacto.nombre.toLowerCase() === name.toLowerCase()
        );

        if (index !== -1) {
            const eliminado = this.contactos.splice(index, 1)[0];
            console.log("El contacto con el nombre: ${eliminado.name}\n Ha sido eliminado con exito");
        } else {
            console.log("El contacto con el nombre: ${eliminado.name}\n No ha sido eliminado, ya que no se ha encontrado");
        }
    
    }
    

    Consultar(){

        console.log("Contactos:");

        this.contactos.forEach(c => {console.log(`Nombre: ${c.nombre}, Teléfono: ${c.telefono}, Correo: ${c.correo}`);});
    }

}

let Contacto = new Agenda;

Contacto.Menu();