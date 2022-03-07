<template>
  <div class="justify-content-center align-items-center">
    <div class="q-pa-xl text-center">
      <div class="text-h5">Cargando información</div>
      <img src="~/assets/loading.gif" class="loading q-pa-md" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({

  name: "Loading",
  setup() {

    return {


    };
  }

});
</script>
