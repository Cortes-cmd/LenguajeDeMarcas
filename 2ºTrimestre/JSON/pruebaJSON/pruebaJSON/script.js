// Ruta del archivo JSON
const jsonUrl = 'Figuras.json';
let jsonData = [];

// Función para cargar datos desde el JSON
fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    jsonData = data;  // Guarda los datos cargados
    displayData(jsonData);  // Muestra los datos
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Función para mostrar los datos en la tabla
function displayData(data) {
  const tableBody = document.getElementById('data-table-body');
  tableBody.innerHTML = ''; // Limpiar tabla antes de agregar los datos

  data.forEach(item => {
    const row = document.createElement('tr');

    const NombreCell = document.createElement('td');
    NombreCell.textContent = item.Nombre;
    row.appendChild(NombreCell);

    const TamañoCell = document.createElement('td');
    TamañoCell.textContent = item.Tamaño;
    row.appendChild(TamañoCell);

    const ColorCell = document.createElement('td');
    ColorCell.textContent = item.Color;
    row.appendChild(ColorCell);

    const Segunda_ManoCell = document.createElement('td');
    Segunda_ManoCell.textContent = item.Segunda_Mano;
    row.appendChild(Segunda_ManoCell);

    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);

    
    

    tableBody.appendChild(row);
  });
}
// Función para filtrar los datos según los valores en los inputs
function filterData() {
  const nameFilter = document.getElementById('nameFilter').value.toLowerCase();
  

  const filteredData = jsonData.filter(item => 
    item.Nombre.toLowerCase().includes(nameFilter) ||
    item.Color.toLowerCase().includes(nameFilter)
  );
    


  displayData(filteredData);  // Muestra los datos filtrados
}