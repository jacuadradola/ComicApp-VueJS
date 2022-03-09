<template>
  <div class="column items-center">
    <!-- <h1 class="text-h5">Mi valoración</h1> -->
    <div class="q-pa-md q-gutter-md" style="font-size: 46px">
      <q-btn
        label="No me gusta"
        :color="notLike ? 'red' : 'white'"
        :text-color="notLike ? 'white' : 'black'"
        @click="EvaluationDown"
      >
        <q-popup-proxy :offset="[400, 100]" transition-show="flip-down" transition-hide="flip-down">
          <q-banner class="bg-red text-white">
            <template v-slot:avatar>
              <q-icon name="las la-frown" />
            </template>
            Lamento saber que este comic no fue de su agrado.
          </q-banner>
        </q-popup-proxy>
      </q-btn>

      <q-icon name="las la-random" class="text-primary cursor-pointer" @click="getComic"></q-icon>

      <q-btn
        label="Me gusta"
        :color="like ? 'green' : 'white'"
        :text-color="like ? 'white' : 'black'"
        @click="EvaluationUp"
      >
        <q-popup-proxy :offset="[400, 100]" transition-show="flip-down" transition-hide="flip-down">
          <q-banner class="bg-green text-white">
            <template v-slot:avatar>
              <q-icon name="las la-smile-wink" />
            </template>
            ¡Que bien! espero te gusten más
            <q-icon name="las la-meteor" />
          </q-banner>
        </q-popup-proxy>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useComicStore from "src/composables/useComicStore";


export default defineComponent({

  name: "Rating",

  setup() {

    const { EvaluationUp, EvaluationDown, getComic, like, notLike } = useComicStore()

    return {
      EvaluationUp,
      EvaluationDown,
      getComic,
      like,
      notLike,
    };
  }

});
</script>
