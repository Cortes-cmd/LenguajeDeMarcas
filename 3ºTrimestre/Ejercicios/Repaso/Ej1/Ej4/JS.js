class CuentaBancaria {
    constructor(titular, numeroCuenta, saldoInicial = 0) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            alert(`Se han ingresado ${cantidad}€. Saldo actual: ${this.saldo}€`);
        } else {
            alert("Cantidad a ingresar debe ser mayor que 0.");
        }
    }

    retirar(cantidad) {
        if (cantidad <= 0) {
            alertalert("Cantidad a retirar debe ser mayor que 0.");
        } else if (cantidad > this.saldo) {
            alert("Saldo insuficiente. No se puede realizar el retiro.");
        } else {
            this.saldo -= cantidad;
            alert(`Se han retirado ${cantidad}€. Saldo actual: ${this.saldo}€`);
        }
    }

    mostrarInformacion() {
        alert(`Cuenta Bancaria:
  - Titular: ${this.titular}
  - Número de cuenta: ${this.numeroCuenta}
  - Saldo: ${this.saldo}€`);
    }
}

// Crear algunas cuentas bancarias
const cuenta1 = new CuentaBancaria("Juan Pérez", "ES123456789", 500);
const cuenta2 = new CuentaBancaria("Ana Gómez", "ES987654321", 1000);

// Mostrar información
cuenta1.mostrarInformacion();
cuenta2.mostrarInformacion();

// Realizar operaciones
cuenta1.ingresar(200);
cuenta1.retirar(150);
cuenta1.retirar(600); 

cuenta2.ingresar(500);
cuenta2.retirar(200);
