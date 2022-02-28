<template>
  <div class="justify-content-center align-items-center">
    <div class="q-pt-md text-center">
      <span class="text-h2">{{ dataComicName }}</span>
    </div>
    <div class="q-pa-md text-center">
      <img alt="Img comic" :src="dataComicImg" />
      <br />
      <span class="text-h3">Tipo: {{ dataComicType }}</span>
      <br />
      <span class="text-h3">Género: {{ dataComicGender }}</span>
    </div>
    <q-separator spaced />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useComicStore from "../composables/useComicStore";

export default defineComponent({

  name: "Comic",
  components: {},
  setup() {

    const { dataComicName, dataComicImg, dataComicGender, dataComicType } = useComicStore()

    return {
      //State
      dataComicName,
      dataComicImg,
      dataComicType,
      dataComicGender,

    };
  }

});
</script>
