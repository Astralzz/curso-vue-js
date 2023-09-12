<template>
    <div>
        <MapaPrincipal :titulo="titulo" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
        <!-- <ControlesMapa :drawEnable="drawEnable" :drawType="drawType" :contextMenuItems="contextMenuItems"
            :layerList="layerList" :jawgLayer="jawgLayer" :osmLayer="osmLayer" /> -->
        <CapaVectoresAeropuertos :vectorsource="vectorsource" :drawEnable="drawEnable" />
        <!-- Otras secciones del mapa aquí -->
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import MapaPrincipal from "./MapaPrincipal.vue";
import ControlesMapa from "./ControlesMapa.vue";
import CapaVectoresAeropuertos from "./CapaVectoresAeropuertos.vue";

// * Variables para MapaPrincipal
const titulo = ref("Mapa de ejemplo")
const center = ref([34, 39.13]);
const rotation = ref(0);
const zoom = ref(6);
const projection = ref("EPSG:4326");

// * Variables para ControlesMapa
const drawEnable = ref(false);
const vectorsource = ref(null); // Configura tu fuente de vectores aquíconst drawType = ref("Point");

// * Variables para CapaVectoresAeropuertos
const contextMenuItems = ref([]); // Configura tus elementos de menú contextual aquí
const layerList = ref([]); // Configura tus capas aquí
const jawgLayer = ref(null); // Configura tu capa Jawg aquí
const osmLayer = ref(null); // Configura tu capa OSM aquí
const drawType = ref("Point");

</script>
  