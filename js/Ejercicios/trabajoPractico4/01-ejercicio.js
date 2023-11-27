class Auto {
    constructor( color, marca,modelo){
    this.color = color 
    this.marca = marca
    this.modelo = modelo}
    encender(){ document.write('<p>Auto encendido</p>')}
    apagar(){ document.write('<p>El auto se apagó</p>' )} 
    
    }

let toyota = new Auto("negro", "Toyota", "AE86");
toyota.encender
toyota.apagar