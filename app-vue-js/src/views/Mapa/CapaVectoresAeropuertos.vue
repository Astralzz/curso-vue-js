<template>
    <div>
        <!-- Capa de vectores de aeropuertos -->
        <ol-vector-layer title="AIRPORTS" :preview="previewImage">
            <!-- Configurar capa de vectores aquí -->
        </ol-vector-layer>
    </div>
</template>
  
<script>
export default {
    // Propiedades que podrían necesitar ser pasadas desde el componente padre
    props: {
        vectorsource: Object,
        drawEnable: Boolean,
    },
    computed: {
        // previewImage() {
        //     return this.drawEnable ? "URL_DE_LA_IMAGEN_CON_DIBUJO" : "URL_DE_LA_IMAGEN_SIN_DIBUJO";
        // },
    },
};
</script>
  
<style scoped>
/* Estilos CSS específicos para este componente */
div {
    border: 1px solid #888;
    margin: 10px;
}
</style>
  