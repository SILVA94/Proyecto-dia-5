
//let generos = ['comedia', 'accion', 'drama', 'terror'];

function recomendar(genero){
    
    let elementoEdad = document.getElementById("edad")

    edad = elementoEdad.value

    let elementopelicula = document.getElementById("peliculaRecomendada")
    
    
    switch(genero){

        case 'comedia':
            if(edad < 13){
                elementopelicula.textContent = "Super campeones" 
            } else if (edad < 16 ){
                elementopelicula.textContent = "Super campeones entre 13 y 16" 
            }
            else {
                elementopelicula.textContent = "Super campeones mayor 16" 
            }
            
        break

        case 'accion':
            if(edad < 13){
                elementopelicula.textContent = "Accion menores de 13" 
            } else if (edad < 16 ){
                elementopelicula.textContent = "Accion entre 13 y 15" 
            }
            else {
                elementopelicula.textContent = "Accion mayor a 16" 
            }
            
        break

        case 'drama':
            if(edad < 13){
                elementopelicula.textContent = "Drama menores de 13" 
            } else if (edad < 16 ){
                elementopelicula.textContent = "Drama entre 13 y 15" 
            }
            else {
                elementopelicula.textContent = "Drama mayor de  16" 
            }
            
        break

        case 'terror':
            if(edad < 13){
                elementopelicula.textContent = "Terror menor de 13"

            } else if (edad < 16 ){
                elementopelicula.textContent = "Terror entre 13 y 15" 
            }
            else {
                elementopelicula.textContent = "Terror mayor 16" 
            }
            
        break
    }
}

/*
let precio = 0;
let frutas = ['manzana', 'naranja', 'banana'];

function calcular(fruta) {
    switch (fruta) {
    
    case 'manzana':
        precio = 15
        break
    case 'naranja':
        precio = 20
        break
    case 'banana':
        precio = 25
        break
    }

    */
   