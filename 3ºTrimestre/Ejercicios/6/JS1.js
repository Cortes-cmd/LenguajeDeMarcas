class Alumno{

    notas = new Array();
    asignaturas = new Array();


    constructor(nombre, edad, curso, email, notas, asignaturas){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.email = email;
        this.notas = notas;
        this.asignaturas = asignaturas;
    }

    calcularMedia(){
        
        var media= 0;

        for (let nota of this.notas){
            media= media +nota
        }

        console.log("La media de tus notas es la siguiente " )

        return media/this.notas.length
    }

    datosAlumno(){
        console.log('-----------------------------')
        console.log("Nombre ->>"+this.nombre)
        console.log("Edad ->>"+this.edad)
        console.log("Curso ->>"+this.curso)
        console.log("Email ->>"+this.email)
        console.log("Notas ->>"+this.notas)
        console.log("Asignaturas ->>"+this.asignaturas)
        console.log("Media de notas ->>"+this.calcularMedia())
        console.log('-----------------------------')
    }

}
objAlumno1= new Alumno("Manuela Carmena",12,"Gastronomía","Manuela_Carmena@gmail.com",[3,5,6,1,8],["Comida_Bol","Comida_Bebido","Comida_Helada","Comida_Triturada"])
objAlumno2= new Alumno("Manuela Raqueta",12,"Padel","Manuela_Raqueta@gmail.com",[7,1,2,9,8],["Raqueta_Bol","Raqueta_Bebido","Raqueta_Helada","Raqueta_Triturada"])
objAlumno3= new Alumno("Manuela Pirueta",12,"Gastronomía","Manuela_Pirueta@gmail.com",[2,2,8,9,10],["Pirueta_Bol","Pirueta_Bebido","Pirueta_Helada","Pirueta_Triturada"])

objAlumno1.datosAlumno();
objAlumno2.datosAlumno();
objAlumno3.datosAlumno();