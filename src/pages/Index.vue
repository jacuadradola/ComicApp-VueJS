<template>
  <q-page class="q-pa-md">
    <div class="column items-center">
      <div v-if="!isDataReady">
        <div class="text-center">
          <h3>Espere por favor</h3>
          <span>Cargando información</span>
        </div>
      </div>
      <div v-else>
        <Comic />
        <Rating />
        <Fab />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import useComicStore from "../composables/useComicStore";

import Comic from 'components/Comic.vue';
import Rating from 'components/Rating.vue';
import Fab from 'components/Fab.vue';

export default defineComponent({

  name: "PageIndex",
  components: { Comic, Rating, Fab },
  setup() {

    const { isDataReady } = useComicStore()

    return {
      isDataReady,

    };
  }

});
</script>
