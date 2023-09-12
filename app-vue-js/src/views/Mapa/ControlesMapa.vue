<template>
    <div>
        <!-- Controles del mapa -->
        <ol-control-bar>
            <ol-toggle-control html="<i class='fas fa-map-marker'></i>" className="edit" title="Point"
                :onToggle="(active) => changeDrawType(active, 'Point')" />
            <!-- Agregar más controles aquí -->
        </ol-control-bar>
    </div>
</template>
  
<script>
export default {
    // Propiedades que podrían necesitar ser pasadas desde el componente padre
    props: {
        drawEnable: Boolean,
        drawType: String,
    },
    methods: {
        changeDrawType(active, draw) {
            // Lógica para cambiar el tipo de dibujo
        },
    },
};
</script>
  
<style scoped>
/* Estilos CSS específicos para este componente */
div {
    background-color: #f0f0f0;
    padding: 10px;
}
</style>
  