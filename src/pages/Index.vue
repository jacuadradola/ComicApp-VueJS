<template>
  <q-page class="q-pa-md">
    <div class="column custom-height items-center justify-between">
      <div v-if="!isDataReady" class="d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h3>Espere por favor</h3>
          <span>Cargando información</span>
        </div>
      </div>
      <div v-else>
        <div class="q-pt-md self-center">
          <span class="text-h2">{{ }}</span>
        </div>
        <div class="self-center">
          <transition
            appear
            enter-active-class="animated heartBeat"
            leave-active-class="animated heartBeat"
          >
            <img alt="Quasar logo" src="~/src/assets/logo.png" style="width: 200px; height: 200px" />
            <!-- <img alt="Quasar logo" :src="imgComic" style="width: 200px; height: 200px" /> -->
          </transition>
          <q-separator spaced />
        </div>

        <div class="self-end">
          <q-btn
            color="primary"
            :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
            class="q-mt-md"
            @click="toggleSideMenu"
          />
          <q-btn color="primary" label="GetData" class="q-mt-md" @click="getData" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, watch, } from "vue";

import useComicStore from "../composables/useComicStore";
import useUI from "../composables/useUIStore";

export default defineComponent({

  name: "PageIndex",

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    const { getComic, isDataReady } = useComicStore()

    onMounted(() => {
      if (isDataReady.value) {
        return getComic();
      }
    });

    /* watch(isDataReady, () => {
      if (isDataReady.value) getComic();
    }); */

    return {
      isDataReady,
      sideMenuOpen,
      toggleSideMenu,
      getData: async () => {
        const { ok, message } = await getComic()
        if (!ok) console.log(message)
      }
    };
  }

});
</script>
