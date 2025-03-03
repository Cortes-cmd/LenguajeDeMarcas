// Llamamos a la función cuando cargue la página
mostrarEnTabla();

// Función que obtiene datos de una API y los muestra en una tabla
async function mostrarEnTabla() {
    // Hacemos una petición a la API para obtener la lista de usuarios
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    
    // Convertimos la respuesta en formato JSON
    const data = await response.json(); 

    // Seleccionamos el cuerpo de la tabla en el HTML donde insertaremos los datos
    const tabla = document.getElementById('tabla-body');
    
    // Limpiamos cualquier contenido anterior en la tabla
    tabla.innerHTML = ''; 

    // Iteramos sobre los datos obtenidos
    data.forEach(usuario => {  
        // Insertamos una fila con los datos del usuario en la tabla
        tabla.innerHTML += `
            <tr>
                <td>${usuario.id}</td>  <!-- Celda con el ID del usuario -->
                <td>${usuario.name}</td>  <!-- Celda con el Nombre del usuario -->
                <td>${usuario.email}</td>  <!-- Celda con el Email del usuario -->
            </tr>
        `;
    });
}

// Llamamos a la función cuando la página haya cargado para mostrar la tabla
mostrarEnTabla();





// Función que obtiene datos de una API y los muestra en una lista
async function mostrarEnLista() {
    // Hacemos una petición a la API para obtener una lista de posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    
    // Convertimos la respuesta en formato JSON
    const data = await response.json();

    // Seleccionamos el elemento <ul> donde insertaremos los datos
    const lista = document.getElementById('lista');

    // Limpiamos cualquier contenido previo en la lista
    lista.innerHTML = '';

    // Iteramos sobre los primeros 5 posts obtenidos
    data.slice(0, 5).forEach(post => {  
        // Agregamos cada título del post dentro de un <li> en la lista
        lista.innerHTML += `<li>${post.title}</li>`;
    });
}

// Llamamos a la función para mostrar la lista
mostrarEnLista();






// Función que obtiene datos de una API y muestra un texto en <p>
async function mostrarTexto() {
    // Hacemos una petición a la API para obtener un post específico (ID=1)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // Convertimos la respuesta en formato JSON
    const data = await response.json();

    // Insertamos el título y el cuerpo del post en el párrafo con el ID 'texto'
    document.getElementById('texto').innerHTML = `<strong>${data.title}</strong>: ${data.body}`;
}

// Llamamos a la función para mostrar el texto
mostrarTexto();





// Función que obtiene datos de una API y los muestra en una tarjeta
async function mostrarEnCard() {
    // Hacemos una petición a la API para obtener un usuario específico (ID=1)
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Convertimos la respuesta en formato JSON
    const data = await response.json();

    // Insertamos los datos en un div con clase 'card' dentro del contenedor con ID 'card-container'
    document.getElementById('card-container').innerHTML = 
    `
        <div class="card">
            <h2>${data.name}</h2> <!-- Nombre del usuario en un encabezado -->
            <p><strong>Email:</strong> ${data.email}</p> <!-- Email del usuario -->
            <p><strong>Teléfono:</strong> ${data.phone}</p> <!-- Teléfono del usuario -->
        </div>
    `;
}

// Llamamos a la función para mostrar la tarjeta
mostrarEnCard();
