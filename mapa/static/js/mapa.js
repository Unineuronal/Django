$(document).ready(
    (function(){
        /* AGREGA EL MAPA A HTML EL TOKEN DEBE SER CAMBIADO */
        mapboxgl.accessToken = 'pk.eyJ1IjoibGlpdmUyd28iLCJhIjoiY2p5ZjF3am9nMTNhODNjb2N2ajdtd2F1MSJ9.5fkF7ebsm86QJGW8uXhIqg';
        var map = new mapboxgl.Map({
            container: 'map', /* ID DE EL DIV PARA INSERTAR EL MAPA */
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-70.6506, -33.4372], /* LAT Y LONG DE SANTIAGO */
            zoom: 10
        });

        /* AÑADE LA MARCA AL MAPA Y ESTA SE PUEDE MOVER */
        var marker = new mapboxgl.Marker({
            draggable: true 
        })
        .setLngLat([-70.6506, -33.4372])
        .addTo(map);

        /* FUNCTION PARA CUANDO SE MUEVA LA MARCA  */ 
        function onDragEnd() {
            var lngLat = marker.getLngLat();
            $("#coordinates").css("display", "block");
            $('#coordinates').html('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
        }
        /* LISTENER PARA CUANDO MUEVA LA MARCA EJECUTE UNA FUNCION */
        marker.on('dragend', onDragEnd);

        /* LISTENER PARA EL BOTON DE AÑADIR MARCA */
        var marcasguardadas = []
        $('#btnadd').click(function(){
            var element = document.createElement('div')
            element.className = 'marker'

            var markeradd = new mapboxgl.Marker(element)
            .setLngLat(marker.getLngLat())
            .addTo(map);
            
            marcasguardadas.push([marker.getLngLat()])
            
        })

    })()
);