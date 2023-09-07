<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>


<!-- Todo --> Template por defecto de vue.ts -->
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentación</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">documentación oficial</a>
    Le proporciona toda la información que necesita para comenzar.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Estampación</template>

    Este proyecto se sirve y se incluye con
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener"> vite </a>.El
    La configuración de IDE recomendada es
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"> vscode </a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener"> volar </a>.Si
    Necesita probar sus componentes y páginas web, consulte
    <a href="https://www.cypress.io/" target="_blank" rel="noopener"> cypress </a> y
    <a href="https://on.cypress.io/component" target="_blank"> prueba de componentes de cypress </a>.

    <br />

    Hay más instrucciones disponibles en <code> README.md </code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosistema</template>

    Obtenga herramientas y bibliotecas oficiales para su proyecto:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener"> piadia </a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"> enrutador vue </a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"> vue test utiliza </a>, y
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"> Vue Dev Tools </a>.Si
    Necesita más recursos, sugerimos pagar
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"> impresionante vue </a>
    Una visita.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Comunidad</template>

    ¿Quedó atascado? Haz tu pregunta sobre
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener"> vue land </a>, nuestro oficial
    Servidor de discordia, o
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_ blank" rel="noopener"> Stackoverflow
    </a>.También debes suscribirte a
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"> nuestra lista de correo </a> y sigue
    el oficial
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"> @vuejs </a>
    Cuenta de Twitter para las últimas noticias en el mundo VUE.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Ver soporte</template>

    Como proyecto independiente, Vue se basa en el respaldo de la comunidad para su sostenibilidad.Puedes ayudar
    nosotros por
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">convertirse en patrocinador</a>.
  </WelcomeItem>
</template>
