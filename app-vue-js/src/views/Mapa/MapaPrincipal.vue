<template>
    <div>
        <h1>{{ titulo ?? "???" }}</h1>
        <!-- Mapa principal -->
        <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 800px">
            <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
        </ol-map>
    </div>
</template>
  
<script>
export default {
    // Propiedades que podrían necesitar ser pasadas desde el componente padre
    props: {
        titulo: String,
        center: Array,
        rotation: Number,
        zoom: Number,
        projection: String,
    },
    mounted() {
        // Configuración adicional del mapa (por ejemplo, agregar capas)
        const map = this.$refs.map.$map;
        // Agregar capas, configurar controles, etc.
    },
};
</script>
  
<style scoped>
/* Estilos CSS específicos para este componente */
div {
    border: 2px solid #ccc;
}
</style>
  