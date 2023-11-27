class Cuenta {

    constructor(){
    this.titular ="Alex"
    this.saldo= 0
    Document.write(`<p>Tu saldo actual es de `//{this.saldo}
    `</p>`)}
    
    ingresar(cantidad){ 
        this.saldo += cantidad 
        
        }
    extraer(cantidad){
        this.saldo -= cantidad 
         }
        informar(){
        Document.write("Tu saldo actual es de" //+{this.saldo}
        )}
   }

let alex = new Cuenta()
alex.ingresar(200)
alex.extraer(100)
alex.informar