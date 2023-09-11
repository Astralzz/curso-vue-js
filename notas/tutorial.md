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

En vue se usa **template** para crear las vistas html

```html
<template>
  <h1>Hola mundo!</h1>
</template>
```

### Declaraciones de datos

En Vue.js, existen dos enfoques principales para declarar y gestionar datos en tus componentes: **reactive** y **ref**.

- reactive

  Se utiliza para crear objetos reactivos, lo que significa que cualquier cambio en las propiedades de ese objeto será detectado automáticamente y provocará una actualización en las vistas que dependen de esas propiedades.

  Es especialmente útil cuando necesitas reactividad en objetos complejos o estructuras de datos anidadas.

- ref

  Se utiliza para crear referencias reactivas a valores primitivos o no objetos. Lo que significa que se utiliza principalmente para variables simples como **\*números, cadenas, booleanos, etc**.

  Se puede acceder al valor subyacente utilizando la propiedad **.value**

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

### Enlazar estilos

En este código se demuestra cómo se pueden enlazar didácticamente clases CSS a elementos HTML dentro de un componente. Utiliza variables reactivas para controlar las clases aplicadas a una caja y un título, lo que permite modificar el estilo de estos elementos en función de la lógica de la aplicación o las interacciones del usuario.

-Se utiliza la directiva **:class** para aplicar didácticamente las clases CSS al html

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

### Accionar botones

Para llevar acabo una acción al presionar un boton se utiliza **@click** en un componente button con la respectiva función a ejecutar:

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

### Enlazar formularios

Para enlazar formularios y realizar un seguimiento de los datos de un formulario, se utiliza la directiva **v-model** en un elemento de entrada (input).

-Al crear un formulario con un campo de entrada (input) se le aplica la directiva **v-model**. Esto significa que cualquier cambio en el campo de entrada se reflejará automáticamente en la variable texto, y viceversa.

```html
<script setup>
  import { ref } from "vue";

  // Variable
  const texto = ref("");
</script>

<!-- Vista -->
<template>
  <!-- Formulario (con su enlace) -->
  <input v-model="texto" placeholder="pon tu nombre" />
  <br />
  <!-- Resultado  -->
  <p>{{ texto && texto.length > 1 ? "Tu nombre es :" + texto : "" }}</p>
</template>
```

### Estructuras condicionales en vue

En Vue.js, puedes implementar estructuras condicionales para mostrar u ocultar elementos en función de condiciones específicas. En este ejemplo, se utiliza una variable booleana isEstadoDeAnimo para controlar la visualización de dos emojis diferentes, que representan estados de ánimo distintos.

- Utiliza las directivas v-if y v-else para mostrar emojis diferentes en función del valor de isEstadoDeAnimo. Si isEstadoDeAnimo es true, se muestra el emoji de una cara feliz (😊); de lo contrario, se muestra el emoji de una cara triste (😢).

```html
<script setup>
  import { ref } from "vue";

  // Variables
  const isEstadoDeAnimo = ref(true);

  //  Cambiar animo
  const cambiarAnimo = () => (isEstadoDeAnimo.value = !isEstadoDeAnimo.value);
</script>

<!-- Vista -->
<template>
  <button @click="cambiarAnimo">cambiar animo</button>
  <h1 v-if="isEstadoDeAnimo">😊</h1>
  <h1 v-else>😢</h1>
</template>
```

La directiva **v-else-if** se utiliza para establecer condiciones adicionales después del v-if. En Vue.js, estas estructuras condicionales son muy flexibles y te permiten crear interfaces dinámicas que se actualizan automáticamente según los cambios en los datos.

```html
<template>
  <div>
    <h1 v-if="puntuacion === 0">Puntuación: 0</h1>
    <h1 v-else-if="puntuacion === 1">Puntuación: 1</h1>
    <h1 v-else-if="puntuacion === 2">Puntuación: 2</h1>
    <h1 v-else>Puntuación desconocida</h1>
  </div>
</template>
```

### Uso y repetición de listas

En Vue.js, puedes trabajar con listas de datos de manera eficiente utilizando la directiva **v-for**. En este ejemplo, se muestra cómo utilizar y representar listas de nombres de una manera interactiva.

-Se utiliza la directiva **@submit.prevent** en el formulario para evitar la recarga de la página al enviar el formulario.

-Se Utiliza la directiva **v-for** para iterar a través de los elementos de listaNombres.

```html
<script setup>
  import { ref } from "vue";

  // id única
  let id = 0;

  // Nombre del formulario
  const nombreListaNueva = ref("");

  // Lista de nombres
  const listaNombres = ref([
    { id: id++, valor: "Edain" },
    { id: id++, valor: "Jesus" },
    { id: id++, valor: "Manuel" },
  ]);

  // * Agregar nuevo nombre
  function agregarNuevoNombre() {
    // El nombre tiene menos de 2 dígitos
    if (nombreListaNueva.value.length < 2) {
      return;
    }

    // Agregamos
    listaNombres.value.push({ id: id++, valor: nombreListaNueva.value });

    // Limpiamos
    nombreListaNueva.value = "";
  }

  // Eliminar nombre
  const eliminarNombre = (nombre) =>
    (listaNombres.value = listaNombres.value.filter((n) => n !== nombre));
</script>

<!-- Vista -->
<template>
  <!-- Formulario -->
  <form @submit.prevent="agregarNuevoNombre">
    <!-- Nombre -->
    <input v-model="nombreListaNueva" />
    <!-- Boton -->
    <button>Agregar nombre</button>
  </form>

  <!-- Lista -->
  <ul>
    <!-- Recorrido -->
    <li v-for="nombre in listaNombres" :key="nombre.id">
      {{ nombre.valor }}
      <!-- Boton de eliminar -->
      <button @click="eliminarNombre(nombre)">X</button>
    </li>
  </ul>
</template>
```

### Uso de checkbox

Se pueden utilizar checkboxes para permitir a los usuarios realizar acciones como marcar elementos como completados o pendientes en una lista.

-Se utiliza un checkbox con la directiva **v-model** para enlazar con la propiedad isOculto del nombre. Esto permite marcar o desmarcar el nombre como oculto.

```html
<script setup>
  import { ref, computed } from "vue";

  // id única
  let id = 0;

  // Nombre del formulario
  const nombreListaNueva = ref("");

  // Lista de marcadores completa
  const isListaOcultosCompleta = ref(false);

  // Lista de nombres
  const listaNombres = ref([
    { id: id++, valor: "Edain", isOculto: false },
    { id: id++, valor: "Jesus", isOculto: false },
    { id: id++, valor: "Manuel", isOculto: false },
  ]);

  // Filtrar lista
  const filtrarLista = computed(() =>
    isListaOcultosCompleta.value
      ? listaNombres.value.filter((n) => !n.isOculto)
      : listaNombres.value
  );

  // * Agregar nuevo nombre
  function agregarNuevoNombre() {
    // El nombre tiene menos de 2 dígitos
    if (nombreListaNueva.value.length < 2) {
      return;
    }

    // Agregamos
    listaNombres.value.push({
      id: id++,
      valor: nombreListaNueva.value,
      isOculto: false,
    });

    // Limpiamos
    nombreListaNueva.value = "";
  }

  // Eliminar nombre
  const eliminarNombre = (nombre) =>
    (listaNombres.value = listaNombres.value.filter((n) => n !== nombre));
</script>

<!-- Vista -->
<template>
  <!-- Formulario -->
  <form @submit.prevent="agregarNuevoNombre">
    <!-- Nombre -->
    <input v-model="nombreListaNueva" />
    <!-- Boton -->
    <button>Agregar nombre</button>
  </form>

  <!-- Lista -->
  <ul>
    <!-- Recorrido -->
    <li v-for="nombre in filtrarLista" :key="nombre.id">
      <!-- Check box -->
      <input type="checkbox" v-model="nombre.isOculto" />
      <!-- Valor -->
      <span :class="{  nombreTachado: nombre.isOculto }"
        >{{ nombre.valor }}</span
      >
      <!-- Boton de eliminar -->
      <button @click="eliminarNombre(nombre)">X</button>
    </li>
  </ul>
  <!-- Boton de filtrar lista -->
  <button @click="isListaOcultosCompleta = !isListaOcultosCompleta">
    {{ isListaOcultosCompleta ? 'mostrar todos' : 'ocultar marcados' }}
  </button>
</template>

<!-- Estilo -->
<style>
  /* Nombre tachado */
  .nombreTachado {
    text-decoration: line-through;
  }
</style>
```

### Ciclo de Vida y Referencias de Plantilla

El ciclo de vida del componente se refiere a su proceso de creación, actualización y destrucción. A veces, es necesario trabajar directamente con el DOM (Document Object Model). Para hacerlo, podemos utilizar referencias de plantilla (ref) y ganchos de ciclo de vida, como **onMounted**.

Referencias de Plantilla (ref):

- Las referencias de plantilla (ref) nos permiten obtener una referencia a un elemento HTML dentro de nuestro componente.
- Declaras una referencia usando ref y le das el mismo nombre que el atributo ref en el elemento HTML que deseas referenciar.
- Inicializamos la referencia con null porque, al principio, el elemento aún no existe en el DOM.
- Solo podemos acceder a la referencia después de que el componente se haya montado en el DOM.

```html
<script setup>
  import { ref } from "vue";

  // Declaramos una referencia de plantilla
  const pElementRef = ref(null);
</script>

<template>
  <!-- Usamos la referencia de plantilla -->
  <p ref="pElementRef">Hola</p>
</template>
```

Gancho de Ciclo de Vida **onMounted**:

- onMounted es un gancho de ciclo de vida que se ejecuta después de que el componente se ha montado en el DOM.
- Lo usamos para realizar operaciones en el DOM una vez que el componente está listo.

```html
<script setup>
  import { ref, onMounted } from "vue";

  const pElementRef = ref(null);

  // Usamos onMounted para ejecutar código después del montaje
  onMounted(() => {
    // Accedemos al elemento referenciado y cambiamos su contenido
    pElementRef.value.textContent = "¡Montado!";
  });
</script>

<template>
  <p ref="pElementRef">Hola</p>
</template>
```

las referencias de plantilla (**ref**) nos permiten trabajar con elementos del DOM en nuestros componentes Vue, y el gancho onMounted nos permite ejecutar código después de que el componente se haya cargado en el DOM. Esto es útil cuando necesitamos realizar acciones específicas en el DOM una vez que el componente se ha mostrado en la página web.

```html

```

### Observadores

Los observadores nos permiten realizar "efectos secundarios" de manera reactiva cuando cambia algún dato (**Parecido a useEffect de react**), como una variable reactiva. Estos efectos secundarios pueden incluir acciones como imprimir mensajes en la consola, realizar solicitudes a una API o realizar cualquier otra operación que necesites cuando los datos cambian.

- Los observadores se crean utilizando la función **watch** de Vue.
- Se puede observar una referencia (por ejemplo, una variable reactiva) y proporcionar una función de devolución de llamada que se ejecutará cada vez que el valor observado cambie.
- Los observadores son útiles para realizar tareas reactivas basadas en cambios de datos, como actualizar una interfaz de usuario o hacer solicitudes a una API cuando los datos cambian.

```html
<script setup>
  import { ref, watch } from "vue";

  // ID de tarea pendiente
  const taskId = ref(1);

  // Datos de la tarea
  const taskData = ref("");

  // Observador que se activa cuando cambia el ID de la tarea
  watch(taskId, async (newTaskId) => {
    // Simulación de solicitud a una API para obtener la tarea
    const response = await fetch(`https://example-api.com/tasks/${newTaskId}`);
    const data = await response.json();

    // Actualizar los datos de la tarea
    taskData.value = data.task;
  });

  // Función para obtener la siguiente tarea
  const getNextTask = () => {
    taskId.value++; // Incrementar el ID para obtener la siguiente tarea
  };
</script>

<template>
  <div>
    <h1>Tarea Pendiente</h1>
    <p>{{ taskData }}</p>
    <button @click="getNextTask">Obtener Siguiente Tarea</button>
  </div>
</template>
```

### Anidación de componentes

La anidación de componentes es una técnica que te permite utilizar componentes dentro de otros componentes. Esto es útil para dividir la interfaz de usuario en componentes más pequeños y reutilizables, lo que facilita la construcción y el mantenimiento de aplicaciones complejas.

Exportando un componente:

Para exportar un componente hijo en Vue.js, generalmente seguimos estos pasos en el archivo "./ComponentHijo.vue" (o el nombre del archivo de componente hijo):

```html
<template>
  <!-- Contenido del componente hijo -->
</template>

<script>
  // Lógica del componente hijo
  export default {
    name: "ComponentHijo", // Nombre opcional del componente
    // ... otras propiedades y métodos del componente
  };
</script>

<style scoped>
  /* Estilos específicos del componente hijo */
</style>
```

Importando un componente:

```html
<script setup>
  // Importamos el componente hijo
  import ComponentHijo from "./ComponentHijo.vue";
</script>

<!-- Vista -->
<template>
  <!-- Usamos el componente anidado -->
  <ComponentHijo />
</template>
```

### Pasando Parámetros Entre Componentes (Props)

El paso de parámetros entre componentes es fundamental en Vue.js. Nos permite enviar datos desde un componente padre a un componente hijo para que estos datos puedan ser reutilizados y mostrados en el componente hijo. A continuación, un tutorial sobre cómo hacerlo:

Creación del Componente Padre:

Creamos un componente padre que enviará datos a un componente hijo. Supongamos que estamos creando una lista de tareas pendientes:

```html
<!-- ComponentePadre.vue -->
<script setup>
  import { ref } from "vue";
  import ComponenteHijo from "./ComponenteHijo.vue";

  // Datos del componente padre
  const mensaje = ref("Hola saludos");
  const num = ref(12);
  const listaTareas = ref([
    { id: 1, nombre: "Hacer la compra" },
    { id: 2, nombre: "Estudiar Vue.js" },
    { id: 3, nombre: "Realizar ejercicios" },
  ]);
</script>

<template>
  <!-- Enviamos parámetros usando :nombre_param = "nombre_ref" -->
  <ComponenteHijo :msj="mensaje" :n="num" :tareas="listaTareas" />
</template>
```

Creación del Componente Hijo:

Crearemos un componente hijo que recibirá y mostrará la lista de tareas del componente padre:

```html
<!-- ComponenteHijo.vue -->
<script setup>
  // Parámetros que llegaron
  const props = defineProps({
    // Nombre : Tipo de dato
    msj: String,
    n: Number,
    tareas: Array,
  });
</script>

<template>
  <!-- Mensaje -->
  <h2>{{ msj || 'No se encontró el mensaje' }}</h2>
  <!-- Numero -->
  <h2>{{ n ? "El numero es " + n : "No se encontró el numero" }}</h2>
  <br />
  <div>
    <h2>Tareas Pendientes:</h2>
    <ul>
      <!-- Tareas -->
      <li v-for="tarea in tareas" :key="tarea.id">{{ tarea.nombre }}</li>
    </ul>
  </div>
</template>
```

### Enviando funciones y eventos por parámetros entre componentes

Pra poder enviar eventos / funciones etc entre componentes **padre e hijo** se utilizar el estilo **@nombre_func="función/acción"** y el hijo la receje con **defineEmits([nombre_función])**

```html
<!-- ComponentePadre.vue -->
<script setup>
  import { ref } from "vue";
  import ChildComp from "./ComponenteHijo.vue";

  // Datos con su referencia
  const mensaje = ref("Mensaje 1");
  const numero = ref(10);
</script>

<template>
  <!-- Componente hijo -->
  <!-- Enviamos la función a realizar entre @nombre_param = "(?parámetro) => acción" -->
  <ComponenteHijo
    @respuesta="(m) => mensaje = m"
    @sumar="(n) => numero = n+numero"
  />
  <!-- Ponemos el mensaje -->
  <p>{{ mensaje }}</p>
  <!-- Ponemos el numero -->
  <p>El numero es {{numero}}</p>
</template>
```

```html
<!-- ComponenteHijo.vue -->
<script setup>
  // Obtenemos funciones que llegaron por parámetros ["nombre_param"]
  const emit = defineEmits(["respuesta", "sumar"]);

  // Ejecutamos funciones y le enviamos su respectivo valor si lo hay
  emit("respuesta", "Mensaje 2");
  emit("sumar", 2);
</script>

<template>
  <!-- Titulo hijo -->
  <h2>Titulo hijo</h2>
</template>
```

### Pasar plantillas del padre al hijo

Además de pasar datos a través de props, el componente padre también puede pasar fragmentos de plantilla al hijo a través de ranuras:

```html
<ComponenteHijo>
¡Este es un contenido de ranura!
</ComponenteHijo>
```

El contenido dentro de la salida se tratará como contenido "alternativo": se mostrará si el padre no transmitió ningún contenido de **slot**

```html
<!-- ComponentePadre.vue -->
<script setup>
  import { ref } from "vue";
  import ChildComp from "./ComponenteHijo.vue";

  // Parámetro
  const mensj = ref("Soy el parámetro");
</script>

<template>
  <!-- Componente hijo -->
  <ComponenteHijo>
    <!-- Plantilla a pasar al hijo que reemplazara slot -->
    Mensaje => {{ mensj || "???" }} 
  </ComponenteHijo>
</template>
```

```html
<!-- ComponenteHijo -->
<script>
  import { ref } from "vue";
  // Variables
  const ClaseComponente = ref("componente");
</script>

<template>
  <!-- Dentro de slot ira el componte que se puede reemplazar por lo que tenga el padre -->
  <slot>
    <!-- Caja  -->
    <div :class="ClaseComponente">
     Mensaje de reserva
    </div>
  </slot>
</template>

<style>
  /*Clase de la caja*/
  .componente {
    background-color: red;
    color: blue;
  }
</style>
```
