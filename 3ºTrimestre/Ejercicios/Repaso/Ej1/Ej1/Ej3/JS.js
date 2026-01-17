class Rectangulo {
    
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }

    esCuadrado() {
        return this.base === this.altura;
    }

    mostrarDatos() {

    alert(` Rectángulo:
  - Base: ${this.base}
  - Altura: ${this.altura}
  - Área: ${this.calcularArea()}
  - Perímetro: ${this.calcularPerimetro()}
  - ¿Es cuadrado?: ${this.esCuadrado() ? "Sí" : "No"}`);
    }
}

// Crear varios objetos
const r1 = new Rectangulo(5, 10);
const r2 = new Rectangulo(8, 8);
const r3 = new Rectangulo(3, 7);

// Mostrar resultados
r1.mostrarDatos();
r2.mostrarDatos();
r3.mostrarDatos();
