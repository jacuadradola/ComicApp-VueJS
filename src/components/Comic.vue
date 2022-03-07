<template>
  <div class="justify-content-center align-items-center">
    <div class="q-pt-md text-center">
      <span class="text-h3">{{ dataComicName }}</span>
    </div>
    <div class="q-pa-md text-center">
      <img alt="Img comic" class="comic-size" :src="dataComicImg" />
      <br />
      <span class="text-h6">Tipo: {{ !dataComicType ? 'Desconocido' : dataComicType }}</span>
      <br />
      <span class="text-h6">Género: {{ !dataComicGender ? 'Desconocido' : dataComicGender }}</span>
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
