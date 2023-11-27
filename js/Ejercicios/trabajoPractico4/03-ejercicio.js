class Rectángulos {
    constructor(ancho,alto){
    this.ancho = ancho
    this.alto = alto
    }
    
    perimetro (){
    this.perimetro= (2 * this.alto) + (2 * this.ancho)
    document.write (`<p> El perimetro del rectángulo es de` +//{this.perimetro}+
     `</p>`)
    
    }
    
    mostrar(){
    document.write (`<p> El ancho del rectángulo es de` +//{this.ancho}+ 
    `<br>
    El alto del rectángulo es de` //+{this.alto}+
    `</p>`)}
    
    Modificar(nuevoAncho, nuevoAlto){
    this.ancho = nuevoAncho
    this.alto = nuevoAlto
    }
    area(){
    this.area = this.ancho * this.alto
    
    document.write (`<p> El area del rectángulo es de`+//{this.area} 
        +`</p>`)
    
    }
    }

