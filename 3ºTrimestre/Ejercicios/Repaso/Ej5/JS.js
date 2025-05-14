// Clase Producto
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    aplicarDescuento(descuento) {
        this.precio -= this.precio * (descuento / 100);
    }

    actualizarStock(cantidad) {
        this.stock -= cantidad;
    }
}



class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto, cantidad) {
        if (producto.stock >= cantidad) {
            this.items.push({ producto, cantidad });
            producto.actualizarStock(cantidad);
            console.log(`Añadido ${cantidad} x ${producto.nombre} al carrito.`);
        } else {
            console.log(`No hay suficiente stock de ${producto.nombre}.`);
        }
    }

    quitarProducto(nombre) {
        const index = this.items.findIndex(item => item.producto.nombre === nombre);
        if (index !== -1) {
            const item = this.items[index];
            item.producto.actualizarStock(-item.cantidad); // Vuelve a aumentar el stock
            this.items.splice(index, 1);
            console.log(`Producto ${nombre} quitado del carrito.`);
        } else {
            console.log("El producto no está en el carrito.");
        }
    }

    calcularTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.producto.precio * item.cantidad;
        });
        return total;
    }

    mostrarCarrito() {
        console.log("Productos en el carrito:");
        this.items.forEach(item => {
            console.log(`${item.cantidad} x ${item.producto.nombre} - ${item.producto.precio}€`);
        });
        console.log(`Total: ${this.calcularTotal()}€`);
    }

    finalizarCompra() {
        const total = this.calcularTotal();
        console.log(`Compra finalizada. Total: ${total}€`);
        this.items = [];  // Limpiar carrito
    }
}

// Crear productos
const p1 = new Producto("Camiseta", "Ropa", 20, 50);
const p2 = new Producto("Pantalón", "Ropa", 30, 30);
const p3 = new Producto("Zapatos", "Calzado", 50, 20);
const p4 = new Producto("Sombrero", "Accesorios", 15, 15);

// Aplicar descuentos por categoría
const descuentos = {
    "Ropa": 10, // 10% de descuento
    "Calzado": 5, // 5% de descuento
    "Accesorios": 20 // 20% de descuento
};

p1.aplicarDescuento(descuentos[p1.categoria]);
p2.aplicarDescuento(descuentos[p2.categoria]);
p3.aplicarDescuento(descuentos[p3.categoria]);
p4.aplicarDescuento(descuentos[p4.categoria]);

// Crear carrito
const carrito = new Carrito();

// Simulación de la compra
carrito.agregarProducto(p1, 2);  // 2 camisetas
carrito.agregarProducto(p3, 1);  // 1 par de zapatos
carrito.agregarProducto(p4, 3);  // 3 sombreros
carrito.mostrarCarrito();

carrito.quitarProducto("Sombrero"); // Elimina un sombrero
carrito.mostrarCarrito();

carrito.finalizarCompra(); // Finaliza la compra
