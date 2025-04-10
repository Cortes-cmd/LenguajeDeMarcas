// Me aseguro de cargar todos los elementos primero y evito erorres de null en elementos que estaban por cargar al ejecutar el script
window.onload = function () {
    // Defino los elementos HTML que voy a usar referenciando los id
    const provinciaSelect = document.getElementById('provinciaSelect');
    const municipioSelect = document.getElementById('municipioSelect');
    const datosMunicipio = document.getElementById('datosMunicipio');

    // Verifico que los elementos HTML necesarios estén presentes, sino, imprimo error en consola
    if (!provinciaSelect || !municipioSelect || !datosMunicipio) {
        console.error("Faltan elementos HTML necesarios");
        return;
    }

    // Función para asignar el emoji según el estado del clima, usando posterioremente el valor de description que retorna la API
    function obtenerEmojiClima(estado) {
        // Passola cadena a minúsculas y eliminamos espacios extras, asi me aseguro de que no haya errores por mayúsculas o espacios
        estado = estado.trim().toLowerCase();

        switch (estado) {
            case 'despejado':
                return '🌞';
            case 'poco nubloso':
                return '🌤️';
            case 'intervalos nubosos con lluvia escasa':
                return '🌦️';
            case 'lluvia fuerte':
                return '🌧️';
            case 'nuboso':
                return '☁️';
            case 'despejado con nubes':
                return '🌥️';
            case 'nuboso con lluvia':
                return '🌧️';
            // Emoji para clima no reconocido
            default:
                return '🌈'; 
        }
    }

    // Realizo la petición a la API de El Tiempo para obtener los datos de las provincias y localidades, y la api devuelve un JSON
    fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response => response.json())
        .then(data => {
            const cities = data.ciudades;

            // Cargar provincias en el select de provincias sin duplicados usando un Set, asi no tengo que hacer un filtrado mas complejo
            const provincias = new Set();
            // Itero sobre las ciudades y agrego las provincias 
            cities.forEach(city => {
                provincias.add(city.nameProvince);
            });
            
            // Crear las opciones de provincia y agregarlas al select de provincias
            provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia;
                option.text = provincia;
                provinciaSelect.appendChild(option);
            });

            // Detectar el cambio de provincia y filtrar las localidades segun el valor de la provincia seleccionada
            provinciaSelect.addEventListener('change', function () {
                const selectedProvince = this.value;
                const filteredCities = cities.filter(city => city.nameProvince === selectedProvince);

                // Limpio el select de localidades y los datos del municipio para evitar que se mantengan los datos de la provincia anterior
                municipioSelect.innerHTML = '<option disabled selected>-- Selecciona localidad --</option>';
                datosMunicipio.innerHTML = '';

                // Para cada ciudad añado una opcion al select de los posibles lugares a elegir
                filteredCities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.name;
                    option.text = city.name;
                    municipioSelect.appendChild(option);
                });
            });

            // Hago lo mismo que en el caso anterior pero con las ciudades en vez de las provincias, y al seleccionar una ciudad, muestro los datos del clima
            municipioSelect.addEventListener('change', function () {
                const selectedCityName = this.value;
                const selectedCity = cities.find(city => city.name === selectedCityName);

                if (selectedCity) {
                    // Verificar que los datos necesarios estén presentes y asignar valores predeterminados si no lo están (lo de los datos predeterminados sobre todo fue porque no te aparecen datos como el de Geolocalizacion o superficie, por si se da que alguna zona si lo tiene)
                    const maxTemp = selectedCity.temperatures ? selectedCity.temperatures.max : 'No disponible';
                    const minTemp = selectedCity.temperatures ? selectedCity.temperatures.min : 'No disponible';
                    const description = selectedCity.stateSky ? selectedCity.stateSky.description : 'No disponible';
                    const emojiClima = obtenerEmojiClima(description);
                    const geoLocation = selectedCity.geoLocation ? `${selectedCity.geoLocation.latitude}, ${selectedCity.geoLocation.longitude}` : 'No disponible';
                    const surface = selectedCity.surface ? selectedCity.surface : 'No disponible';
                    const provinceCode = selectedCity.provinceCode ? selectedCity.provinceCode : 'No disponible';
                    const capital = selectedCity.capital ? selectedCity.capital : 'No disponible';

                    // Muestro los datos en formato HTML del clima segun los datos obtenidos de la API
                    datosMunicipio.innerHTML = `
                        <h4>Datos del Tiempo</h4>
                        <p><strong>Ciudad:</strong> ${selectedCity.name}</p>
                        <p><strong>Provincia:</strong> ${selectedCity.nameProvince}</p>
                        <p><strong>Descripción del Clima:</strong> ${description} ${emojiClima}</p>
                        <p><strong>Temperatura Máxima:</strong> ${maxTemp} °C</p>
                        <p><strong>Temperatura Mínima:</strong> ${minTemp} °C</p>
                        <p><strong>Geolocalización:</strong> ${geoLocation}</p>
                        <p><strong>Superficie:</strong> ${surface} km²</p>
                        <p><strong>Código de Provincia:</strong> ${provinceCode}</p>
                        <p><strong>Capital:</strong> ${capital}</p>
                    `;
                }
            });

            // Dispara el evento 'change' para cargar las provincias inicialmente sin que se tenga que seleccionar para que cargue la primera provincia 
            provinciaSelect.dispatchEvent(new Event('change'));
        })
        // Registro de errores
        .catch(error => console.error('Error:', error));
};
