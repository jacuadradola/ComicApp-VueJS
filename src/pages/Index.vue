<template>
  <q-page class="q-pa-md">
    <div class="column items-center">
      <div v-if="!isDataReady">
        <Loading />
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
import Loading from 'components/Loading.vue';

export default defineComponent({

  name: "PageIndex",
  components: { Comic, Rating, Fab, Loading },
  setup() {

    const { isDataReady } = useComicStore()

    return {
      isDataReady,

    };
  }

});
</script>
