/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. 
Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/

class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Rectangulo{
    constructor(punto1,punto2){
        this.punto1 = punto1;
        this.punto2 = punto2;
    }

    calcularBase(){
        if (this.punto1.x > this.punto2.x) {
            return this.punto1.x - this.punto2.x
        } else {
            return this.punto2.x - this.punto1.x
        }
    }

    calcularAltura(){
        if (this.punto1.y > this.punto2.y) {
            return this.punto1.y - this.punto2.y
        } else {
            return this.punto2.y - this.punto1.y
        }
    }

    hallarPerimetro(){
        return 2 * (this.calcularBase() * this.calcularAltura());
    }

    hallarArea(){
        return this.calcularBase() * this.calcularAltura();
    }

}

const punto1 = new Punto(1,2)
const punto2 = new Punto(3,4)

const rectangulo = new Rectangulo(punto1, punto2);

console.log("Base del rectángulo: " + rectangulo.calcularBase())
console.log("Altura del rectángulo: " + rectangulo.calcularAltura())
console.log("Perímetro del rectángulo: " + rectangulo.hallarPerimetro())
console.log("Área del rectángulo: " + rectangulo.hallarArea())


//Lo muestro en mi página html
document.write("Base del rectángulo: " + rectangulo.calcularBase() + "<br>")
document.write("Altura del rectángulo: " + rectangulo.calcularAltura() + "<br>")
document.write("Perímetro del rectángulo: " + rectangulo.hallarPerimetro() + "<br>")
document.write("Área del rectángulo: " + rectangulo.hallarArea() + "<br>")