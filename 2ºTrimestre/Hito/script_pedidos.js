// Este script carga toda la info del archivo de data.json, y la deposita en las funciones que posteriormente, cargarán la información a las tablas del html.
document.addEventListener("DOMContentLoaded", function() {
    //Con el fetch cargamos los datos del archivo data.json.
    fetch('data.json')
        //Cuando suceda, introducimos lo que devuelve el fetch en la variable response, que convertimos en la sintaxis de JSON.
        .then(response => response.json())
        //Este contenido con la sintaxis del JSON, en la variable data, que se introducirá en cada función, pues se servirán de esos datos para cargar la información
        .then(data => {
            cargarPedidos(data);
            cargarClientes(data);
            cargarProductosVendidos(data);
            cargarFactura(data);
        })
        //En caso de error, se mostrará en consola esa falla.
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Carga los pedidos del archivo data.json en la tabla con el id "tablaPedidos", y los introduce en el tbody.
    function cargarPedidos(pedidos) {
        const tbody = document.querySelector("#tablaPedidos tbody");
        tbody.innerHTML = "";
        // La variable pedidos, contiene todos los datos de los 2 años, de ahí, recorremos con foreach, cada trimestre, de cada trimestre, nos adentramos una capa más, y vemos los pedidos de cada trimestre, y de todos los pedidos, saca cada pedido individualmente.
        Object.values(pedidos).forEach(trimestre => {
            Object.values(trimestre).forEach(listaPedidos => {
                listaPedidos.forEach(pedido => {
                    // Y devuelve los datos en las filas de la tabla con el contenido de las variables de cada pedido.
                    const row = `<tr>
                        <td>${pedido.numero_pedido}</td>
                        <td>${pedido.fecha_compra}</td>
                        <td>${pedido.fecha_entrega}</td>
                        <td>${pedido.total_factura.toFixed(2)}</td>
                    </tr>`;
                    tbody.innerHTML += row;
                });
            });
        });
    }
//La función cargarClientes, lee los datos de pedidos del data.json, y aplicando un set, evita que se repitan los clientes por nombre, apellidos, y teléfono, para luego introducirlos en la tabla con el id "tablaClientes".
    function cargarClientes(pedidos) {
        const tbody = document.querySelector("#tablaClientes tbody");
        tbody.innerHTML = "";
        //Creamos un set para evitar que se repitan los clientes.
        const clientesSet = new Set();

        //Recorremos los pedidos como en la función anterior, de cada dato del pedido, los del cliente, comprobaremos si se repiten, acordes a los datos introducidos en "clienteId".
        Object.values(pedidos).forEach(trimestre => {
            Object.values(trimestre).forEach(listaPedidos => {
                listaPedidos.forEach(pedido => {
                    const clienteId = `${pedido.cliente.nombre}-${pedido.cliente.apellidos}-${pedido.cliente.telefono}`;
                    if (!clientesSet.has(clienteId)) {
                        clientesSet.add(clienteId);
                        //Y si no se repiten, los introduce en la tabla con los datos de cada cliente.
                        const row = `<tr>
                            <td>${pedido.cliente.nombre}</td>
                            <td>${pedido.cliente.apellidos}</td>
                            <td>${pedido.cliente.telefono}</td>
                            <td>${pedido.cliente.correo}</td>
                            <td>${pedido.cliente.direccion.calle}</td>
                            <td>${pedido.cliente.direccion.ciudad}</td>
                            <td>${pedido.cliente.direccion.codigo_postal}</td>
                            <td>${pedido.cliente.direccion.provincia}</td>
                        </tr>`;
                        tbody.innerHTML += row;
                    }
                });
            });
        });
    }
    // 
    function cargarProductosVendidos(pedidos) {
        const tbody = document.querySelector("#tablaProductosVendidos tbody");
        tbody.innerHTML = "";

        const trimestres = [
            pedidos["2023"] ? pedidos["2023"]["Q1"] : [],
            pedidos["2024"] ? pedidos["2024"]["Q4"] : []
        ];

        trimestres.forEach(listaPedidos => {
            listaPedidos.forEach(pedido => {
                pedido.productos.forEach(producto => {
                    const row = `<tr>
                        <td>${producto.referencia}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio.toFixed(2)}</td>
                        <td>${producto.unidades}</td>
                    </tr>`;
                    tbody.innerHTML += row;
                });
            });
        });
    }

    function cargarFactura(pedidos) {
        const tbody = document.querySelector("#tablaFactura tbody");
        tbody.innerHTML = "";

        // Verifica que los datos existan y tengan la estructura esperada
        if (pedidos["2023"] && pedidos["2023"]["Q1"] && pedidos["2023"]["Q1"].length > 0) {
            const pedido = pedidos["2023"]["Q1"][0];
            const cliente = pedido.cliente;

            pedido.productos.forEach(producto => {
                const row = `<tr>
                    <td>${cliente.nombre} ${cliente.apellidos}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio.toFixed(2)}</td>
                    <td>${producto.unidades}</td>
                </tr>`;
                tbody.innerHTML += row;
            });
        } else {
            console.error('No se encontraron datos para la factura en el primer trimestre de 2023.');
        }
    }


});
