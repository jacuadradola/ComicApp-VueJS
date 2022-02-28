<template>
  <q-btn
    color="primary"
    :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
    class="btnNav"
    @click="toggleSideMenu"
  />
  <q-btn color="secondary" label="Nuevo comic" class="btnRandom" @click="randomComic" />
</template>
<script>
import useComicStore from "src/composables/useComicStore";
import useUIStore from "src/composables/useUIStore";
import { defineComponent } from "vue";

export default defineComponent({

  name: "Fab",
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUIStore();

    const { randomComic } = useComicStore()

    return {
      sideMenuOpen,
      toggleSideMenu,

      randomComic

    };
  }

});
</script>
