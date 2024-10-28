//Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.

class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    averiguarCuadrante(){
        if (this.x > 0 && this.y > 0) {
            return "primer cuadrante"
        } else if (this.x < 0 && this.y > 0) {
            return "segundo cuadrante"
        } else if (this.x < 0 && this.y < 0) {
            return "tercer cuadrante"
        } else if (this.x > 0 && this.y < 0) {
            return "cuarto cuadrante"
        } else  if (this.x == 0 && (this.y > 0 || this.y < 0)) {
            return "eje x"
        } else if ((this.x > 0 || this.x < 0) && this.y == 0) {
            return "eje y"
        } else {
            return "origen"
        }
    }
}


const punto1 = new Punto(9,-5)
console.log("Punto1: (" + punto1.x + "," + punto1.y + ") está en el " + punto1.averiguarCuadrante())

document.write("Punto1: (" + punto1.x + "," + punto1.y + ") está en el " + punto1.averiguarCuadrante())