<template>
  <div class="hello">
    <iframe class="presentation"
      src="https://docs.google.com/presentation/d/e/2PACX-1vRE6uprMw0ZGD6OdzxLa7z8Bmx0QiNshFqqxgj2DyB5ymauIzefGn3vTTZPmS7XYSkA01m_BlC3QPm4/embed?start=false&loop=false&delayms=5000" 
      frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
    </iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html, body, #app {
  min-width: 100vw !important;
  min-height: 100vh !important;
}
.home, .hello {
  width: 100% !important;
  height: 100% !important;
  iframe {
    height: 85vh;
    width: 85vw;
    max-width: 100% !important;
    max-height: 100% !important;
  }
}
</style>
