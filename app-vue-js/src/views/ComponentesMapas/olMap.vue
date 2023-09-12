<template>
    <div>
        <header>
            <h2>
                Uso de olMap en un Mapa de México
            </h2>
            <p>
                Este es el contenedor principal para todos los demás componentes de VUE3-OpenLayers y tiene una ranura
                predeterminada para colocarlos todos. Por lo general, lo usará junto con el componente OL-View para
                configurar el zoom, el centro, la proyección y otras propiedades de vista relacionadas para el mapa de
                México.
            </p>
        </header>

        <br>

        <!-- Mapa de México -->
        <section>
            <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px">
                <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

                <ol-tile-layer>
                    <ol-source-osm />
                </ol-tile-layer>

                <!-- Utiliza un bucle v-for para crear marcadores para cada objeto JSON -->
                <ol-overlay v-for="(item, index) in data.slice(0, 100)" :key="index"
                    :position="parseCoordinates(item.lat, item.lon)" :interactive="true" class="marker"
                    @click="showInfo($event, item)" @mouseover="showInfo($event, item)">
                    <!-- Puedes agregar contenido adicional aquí si lo deseas -->
                    <div>
                        <h4 style="color: black">🔴</h4>
                        <!-- <p>Clima: {{ item.desciel }}</p>  -->
                        <!-- Agrega más información según tus necesidades -->
                    </div>j
                </ol-overlay>


            </ol-map>
        </section>

        <br>

        <section>
            <h3>Enlaces:</h3>
            <a href="https://vue3openlayers.netlify.app/componentsguide/map/">Más información</a>
        </section>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import datosJson from "../../data/data1.json";

const datos = {
    condenadas: [-101, 18], // Coordenadas centradas en México
    nivelZoom: 8, // nivel de zoom
    rotaciónInicial: 0// Ángulo de rotación inicial (en grados)
}

// Variables para el mapa de México
const center = ref(datos.condenadas);
const projection = ref("EPSG:4326");
const zoom = ref(datos.nivelZoom); // Ajustar el nivel de zoom deseado
const rotation = ref(datos.rotaciónInicial);
const data = datosJson;

const parseCoordinates = (lat, lon) => [lon, lat];

const showInfo = (event, item) => {
    // Aquí puedes mostrar la información, por ejemplo, en un cuadro de diálogo o un componente de Vue
    console.log("Mostrar información:", item);
}

</script>
  