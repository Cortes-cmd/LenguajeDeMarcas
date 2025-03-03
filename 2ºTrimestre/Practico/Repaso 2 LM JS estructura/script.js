// Cargar datos desde un archivo JSON para mostrarlos en una tabla, lista, texto o tarjetas
async function cargarDatos() {
    // Cargar datos desde un archivo JSON
    const response = await fetch('data.json');
    // Lo transformo en json
    const data = await response.json();
    return data;
}

// Insertar datos en una tabla
function mostrarTabla(data) {
    // Obtener la tabla desde el DOM
    const tabla = document.getElementById("tabla");
    //Por cada persona creo una fila para la tabla
    data.forEach(persona => {
        // Crear una fila
        const fila = document.createElement("tr");
        // Insertar los datos de la persona en la fila
        fila.innerHTML = `<td>${persona.nombre}</td><td>${persona.edad}</td><td>${persona.ciudad}</td>`;
        // Agregar la fila a la tabla
        tabla.appendChild(fila);
    });
}

// Insertar datos en una lista
function mostrarLista(data) {
    // Obtener la lista desde el DOM
    const lista = document.getElementById("lista");
    // Por cada persona creo un li de lista
    data.forEach(persona => {
        // Crear un elemento de lista
        const item = document.createElement("li");
        // Insertar los datos de la persona en el elemento
        item.textContent = `${persona.nombre} - ${persona.edad} años`;
        // Agregar el elemento a la lista
        lista.appendChild(item);
    });
}

// Mostrar datos en un párrafo de texto
function mostrarTexto(data) {
    // Obtener el párrafo desde el DOM
    const texto = document.getElementById("texto");
    // Insertar los nombres de las personas
    texto.textContent = data.map(persona => persona.nombre).join(", ");
}

// Mostrar una única tarjeta con el primer usuario en una card
function mostrarCard(data) {
    // Obtener la tarjeta desde el DOM
    const card = document.getElementById("card");
    // Tomar el primer usuario
    const persona = data[0]; 
    // Insertar los datos de la persona en la card
    card.innerHTML = `
        <div class="card">
            <h3>${persona.nombre}</h3>
            <p>Edad: ${persona.edad}</p>
            <p>Ciudad: ${persona.ciudad}</p> 
        </div>
    `;
}

// Mostrar varias tarjetas (una por cada usuario)
function mostrarVariasCards(data) {
    // Obtener el contenedor de las cards desde el DOM
    const container = document.getElementById("cards-container");
    // Limpiar el contenedor antes de agregar nuevas cards
    container.innerHTML = ''; 
    // Por cada persona creo una card
    data.forEach(persona => {
        // Crear una card
        const card = document.createElement("div");
        // Agregar clases y estilos a la card
        card.classList.add("card", "m-2");
        // Marco el ancho de la card
        card.style.width = "18rem";
        // Insertar los datos de la persona en la card
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${persona.nombre}</h5>
                <p class="card-text">Edad: ${persona.edad}</p>
                <p class="card-text">Ciudad: ${persona.ciudad}</p>
            </div>
        `;
        // Agregar la card al contenedor
        container.appendChild(card);
    });
}

// Ejecutar todas las funciones al cargar la página
document.addEventListener("DOMContentLoaded", async () => {
    const data = await cargarDatos();
    mostrarTabla(data);
    mostrarLista(data);
    mostrarTexto(data);
    mostrarCard(data);
    mostrarVariasCards(data);
});