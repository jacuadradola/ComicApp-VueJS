<template>
  <q-page class="q-pa-md">
    <div class="column items-center justify-between">
      <div v-if="!isDataReady">
        <div class="text-center">
          <h3>Espere por favor</h3>
          <span>Cargando información</span>
        </div>
      </div>
      <div v-else class="justify-content-center align-items-center">
        <div class="q-pt-md text-center">
          <span class="text-h2">{{ dataComicName }}</span>
        </div>
        <div class="q-pa-md text-center">
          <transition
            appear
            enter-active-class="animated heartBeat"
            leave-active-class="animated heartBeat"
          >
            <img alt="Img comic" :src="dataComicImg" />
          </transition>
          <br />
          <span class="text-h3">Tipo: {{ dataComicType }}</span>
          <br />
          <span class="text-h3">Género: {{ dataComicGender }}</span>
          <q-separator spaced />
          <Rating />
        </div>
      </div>
    </div>
    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
      class="btnNav"
      @click="toggleSideMenu"
    />
    <q-btn color="secondary" label="Nuevo comic" class="btnRandom" @click="randomComic" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";

import useComicStore from "../composables/useComicStore";
import useUI from "../composables/useUIStore";

import Rating from 'components/Rating.vue';

export default defineComponent({

  name: "PageIndex",
  components: { Rating },
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    const { randomComic, isDataReady, dataComicName, dataComicImg, dataComicGender, dataComicType } = useComicStore()

    return {
      //State
      sideMenuOpen,
      isDataReady,
      dataComicName,
      dataComicImg,
      dataComicType,
      dataComicGender,

      toggleSideMenu,
      randomComic

    };
  }

});
</script>
