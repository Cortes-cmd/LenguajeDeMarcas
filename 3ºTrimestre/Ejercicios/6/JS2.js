class Pelicula{

    valoraciones = new Array();
    plataforma = new Array();


    constructor(titulo, Director, año, genero, valoraciones , plataforma ){
        this.titulo = titulo;
        this.Director = Director;
        this.año = año;
        this.genero = genero;
        this.valoraciones  = valoraciones ;
        this.plataforma  = plataforma ;
    }

    mediaValoraciones(){
        
        var media= 0;

        for (let valoracion of this.valoraciones){
            media= media +valoracion
        }

        console.log("La media de valoraciones es la siguiente " )

        return media/this.valoraciones.length
    }

    datosPelicula(){
        console.log('-----------------------------')
        console.log("Título ->>"+this.titulo)
        console.log("Director ->>"+this.Director)
        console.log("Año ->>"+this.año)
        console.log("Género ->>"+this.genero)
        console.log("Valoraciones ->>"+this.valoraciones)
        console.log("Plataforma ->>"+this.plataforma)
        console.log("Media de valoraciones ->>"+this.mediaValoraciones())
        console.log('-----------------------------')
    }

}
objPelicula1= new Pelicula("Manuela Camionera","Echevarrio",2012,"Comedia Romántica",[3,5,6,1,8],["Netflix","HBO","Clan","TV_Extremadura"])
objPelicula2= new Pelicula("Forto Fontanero","Dukado Mikado",2002,"Drama",[7,1,2,9,8],["Netflix","HBO","Clan","TV_Extremadura"])
objPelicula3= new Pelicula("Palota Pilota","Focault",1914,"Novela",[2,2,8,9,10],["Netflix","HBO","Clan","TV_Extremadura"])

objPelicula1.datosPelicula();
objPelicula2.datosPelicula();
objPelicula3.datosPelicula();