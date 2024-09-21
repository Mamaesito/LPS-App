window.initMap = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            // Obtener las coordenadas del usuario
            var userLocation = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
            var map = new Microsoft.Maps.Map('#myMap', {
                credentials: 'Ao46xYbAAZCcZ02OaPnLjKJ8MnaQcSFdiGCEL3cfmvqXPlz9CRTL8_KfWW2L0Ke8',
                center: userLocation,  // Usar la ubicación del usuario
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 15  // Puedes ajustar el nivel de zoom según prefieras

            });

            // Agregar un pushpin en la ubicación actual
            var pin = new Microsoft.Maps.Pushpin(userLocation, {
                title: 'La Real'
            });
            map.entities.push(pin);

            // Agregar un evento para mostrar un cuadro de texto cuando se hace clic en el pin
            Microsoft.Maps.Events.addHandler(pin, 'click', function () {
                var infobox = new Microsoft.Maps.Infobox(userLocation, {
                    title: 'Ubicación actual',
                    description: 'Usted está aquí',
                    visible: true
                });
                infobox.setMap(map);
            });

        }, function (error) {

            console.error("Error al obtener la ubicación: " + error.message);
            // Mostrar un mapa predeterminado si no se puede acceder a la ubicación
            var defaultLocation = new Microsoft.Maps.Location(19.12477255105987, -104.34512563304096);
            var map = new Microsoft.Maps.Map('#myMap', {
                credentials: 'Ao46xYbAAZCcZ02OaPnLjKJ8MnaQcSFdiGCEL3cfmvqXPlz9CRTL8_KfWW2L0Ke8',
                center: defaultLocation,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 17
            });
            // Agregar un pushpin en la ubicación actual
            var pin = new Microsoft.Maps.Pushpin(defaultLocation, {
                title: ''
            });
            map.entities.push(pin);

            // Agregar un evento para mostrar un cuadro de texto cuando se hace clic en el pin
            Microsoft.Maps.Events.addHandler(pin, 'click', function () {
                var infobox = new Microsoft.Maps.Infobox(defaultLocation, {
                    title: 'Unidad 1',
                    description: 'Operador: Diego Danae <br> Transporte: Kenworth',
                    visible: true
                });
                infobox.setMap(map);
            });
        });
    } 
}
