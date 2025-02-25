// Función que obtiene datos de una API y los muestra en una tabla
async function mostrarEnTabla() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Seleccionamos el cuerpo de la tabla en el HTML
    const tabla = document.getElementById('tabla-body');
    tabla.innerHTML = ''; // Limpiamos el contenido anterior

    data.forEach(usuario => {
        // Insertamos una fila con los datos del usuario
        tabla.innerHTML += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
            </tr>
        `;
    });
}

// Llamamos a la función cuando cargue la página
mostrarEnTabla();

// Función que obtiene datos de una API y los muestra en una lista
async function mostrarEnLista() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiamos el contenido anterior

    data.slice(0, 5).forEach(post => { // Mostramos solo 5 elementos
        // Agregamos cada título de post en un elemento <li>
        lista.innerHTML += `<li>${post.title}</li>`;
    });
}

mostrarEnLista();

// Función que obtiene datos de una API y muestra un texto en <p>
async function mostrarTexto() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    // Mostramos el título y cuerpo del post en un párrafo
    document.getElementById('texto').innerHTML = `<strong>${data.title}</strong>: ${data.body}`;
}

mostrarTexto();

// Función que obtiene datos de una API y los muestra en una tarjeta
async function mostrarEnCard() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();

    // Insertamos los datos en un div con clase 'card'
    document.getElementById('card-container').innerHTML = `
        <div class="card">
            <h2>${data.name}</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.phone}</p>
        </div>
    `;
}

mostrarEnCard();
