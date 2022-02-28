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
          <br />
          <span class="text-h4">{{ dataComicId }}</span>
        </div>
        <div class="q-pa-md text-center">
          <transition
            appear
            enter-active-class="animated heartBeat"
            leave-active-class="animated heartBeat"
          >
            <img alt="Img comic" src="https://placeimg.com/500/300/nature" />
          </transition>
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
    <q-btn color="secondary" label="Nuevo comic" class="btnRandom" @click="getComic" />
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
    const shape = ref('1')
    const temp = ref('')
    const { sideMenuOpen, toggleSideMenu } = useUI();

    const { getComic, isDataReady, dataComicId, dataComicName, dataComicImg, } = useComicStore()

    onMounted(() => {

      if (isDataReady.value) {
        return getComic();
      }
    });
    watch(isDataReady, () => {
      if (isDataReady.value) {
        return getComic();
      }
    })



    return {
      //State
      shape,
      temp,
      sideMenuOpen,
      isDataReady,
      dataComicId,
      dataComicName,
      dataComicImg,
      getComic,



      toggleSideMenu,
      /*  getComic: async () => {
         const resp = await store.dispatch('comic/getComic', idComic)
         return resp
       } */

    };
  }

});
</script>
