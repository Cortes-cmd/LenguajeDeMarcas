// Ruta del archivo JSON
const Url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';
let jsonData = [];

// Función para cargar datos desde el JSON
fetch(Url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    
    const postList= document.getElementById("post-list"); //Obtener contenedor

    //Itera sobre los datos y crea elementos <li>

    data.forEach(post => {

      const li = document.createElement("li"); // Crea un elemento de lista
      li.textContent = `${post.title}: ${post.body}`; // Agrega el título y el body
      postList.appendChild(li); //Inserta los <li> por cada apartado de la lista
    })
  })
  .catch(error => {
    console.error('Hubo un problema con la petición Fetch:', error);
  });

