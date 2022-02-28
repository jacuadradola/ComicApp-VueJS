<template>
  <q-btn color="secondary" label="Nuevo" class="btnRandom" @click="randomComic" />
  <q-btn
    color="primary"
    :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
    class="btnNav"
    @click="toggleSideMenu"
  />
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
