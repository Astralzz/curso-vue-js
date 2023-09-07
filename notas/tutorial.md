# TUTORIAL BÁSICO

## Estilo de trabajar

### Formas de componentes

- Para crear elementos js ocupamos **script setup**:

```html
<script setup>
  import { ref } from "vue";
  const count = ref(0);
</script>
```

- Para crear elementos html ocupamos o es recomendable que estén dentro de un **template**:

```html
<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

- Para crear elementos css ocupamos **style**:

```html
<style scoped>
  button {
    font-weight: bold;
  }
</style>
```

Como se puede observar las etiquetas son muy similares o casi iguales a las originales

### Scrip o scrip scoped

Para los proyectos de vue podemos usar un scrip normal pero es mejor y mas recomendado usar scrip scoped

- usando un scrip normal:

```html
<script>
  export default {
    /* @ DATOS 
    Las propiedades devueltas de los datos () se convierten en estado reactivo
    // y estará expuesto en `this`. 
    */
    data() {
      return {
        num: 0,
      };
    },

    /* @  MÉTODOS
     - Los métodos son las funciones que mutaran el estado y activan actualizaciones.
     - pueden estar atados como manejadores de eventos en plantillas.
    */
    methods: {
      incrementar() {
        this.num++;
      },
    },

    /* @ MOMENTOS
     * Los ganchos de ciclo de vida se llaman en diferentes etapas del ciclo de vida de un componente.
     * Esta función se llamará cuando el componente esté montado.
     * Similar al useEffect de react
     */
    mounted() {
      console.log(`El recuento inicial es de ${this.num}.`);
    },
  };
</script>

<!-- Acción  -->
<template>
  <!-- Al presionar -->
  <button @click="incrementar">El recuento es: {{ num }}</button>
</template>
```

- usando un scrip setup:

```html
<script setup>
  // IMPORTACIONES
  import { ref, onMounted } from "vue";

  // estado reactivo
  const num = ref(0);

  // Funciones que mutaron y activan actualizaciones
  function incrementar() {
    num.value++;
  }

  // ganchos de ciclo de vida
  onMounted(() => {
    console.log(`El recuento inicial es de ${num.value}.`);
  });
</script>

<!-- Acción  -->
<template>
  <!-- Al presionar -->
  <button @click="incrementar">El recuento es: {{ num }}</button>
</template>
```

---

## TUTORIAL

### Uso de template básico

- Hola mundo

```html
<template>
  <h1>Hola mundo!</h1>
</template>
```

### Declaraciones de datos

```html
<script setup>
  // Importamos
  import { reactive, ref } from "vue";

  // Reacción
  const contador = reactive({ n: 0 });

  // Referencia
  const mensaje = ref("Hello World!");
</script>

<!-- Vista -->
<template>
  <!-- Mensaje -->
  <h1>{{ mensaje ?? "???" }}</h1>

  <!-- Mensaje al inversa -->
  <h1>{{ mensaje ? mensaje.split('').reverse().join('') : "???"}}</h1>

  <!-- Párrafo -->
  <p>El contador es: {{ contador.n }}</p>
</template>
```

### Enlazar atributos

```html
<!-- Lógica -->
<script setup>
  import { ref } from "vue";

  // Variables
  const ClaseComponente = ref("componente");
  const ClaseTitulo = ref("titulo");
</script>

<!-- Vista -->
<template>
  <!-- Caja  -->
  <div :class="ClaseComponente">
    <!-- Titulo -->
    <h1 :class="ClaseTitulo">Soy el titulo</h1>
  </div>
</template>

<!-- Estilos -->
<style>
  /*Clase de la caja*/
  .componente {
    background-color: red;
  }

  /*Clase titulo*/
  .titulo {
    color: pink;
  }
</style>
```

### Accionar eventos

```html
<!-- Lógica -->
<script setup>
  import { ref } from "vue";

  // Variables
  const numero = ref(0);
  const claseTitulo = ref("titulo");

  // Funxiones
  function aumentar() {
    numero.value++;
  }
  // Disminuir
  const disminuir = () => {
    numero.value--;
  };
</script>

<!-- Vista -->
<template>
  <!-- Titulo -->
  <h3 :class="claseTitulo">El numero es {{numero}}</h3>
  <!-- Boton para aumentar -->
  <button @click="aumentar">Aumentar</button>
  <!-- Boton para disminuir -->
  <button @click="disminuir">Disminuir</button>
</template>

<!-- Estilos -->
<style>
  .titulo {
    color: pink;
  }
</style>
```
