<template>
  <div class="column items-center">
    <h1 class="text-h5">Dar mi valoración</h1>
    <div class="q-gutter-sm">
      <q-radio
        v-model="shape"
        checked-icon="lar la-check-circle"
        unchecked-icon="lar la-circle"
        val="0"
        label="Sin valorar"
      />
      <q-radio
        v-model="shape"
        checked-icon="lar la-check-circle"
        unchecked-icon="lar la-circle"
        val="1"
        label="No me gusta"
      />
      <q-radio
        v-model="shape"
        checked-icon="lar la-check-circle"
        unchecked-icon="lar la-circle"
        val="2"
        label="Normal"
      />
      <q-radio
        v-model="shape"
        checked-icon="lar la-check-circle"
        unchecked-icon="lar la-circle"
        val="3"
        label="Es bueno"
      />
      <q-radio
        v-model="shape"
        checked-icon="lar la-check-circle"
        unchecked-icon="lar la-circle"
        val="4"
        label="Me gusta mucho"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";


export default defineComponent({

  name: "Rating",

  setup() {
    const shape = ref('0')

    return {
      //State
      shape,

    };
  }

});
</script>
