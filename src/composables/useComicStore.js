import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const useComicStore = () => {

  const store = useStore();

  let idComic = Math.floor(Math.random() * 826 + 1);
  let idCurrent = store.getters['comic/currentId']
  let isCurrentComic = store.getters['comic/isCurrentComic']

  const getComic = async () => {
    await store.dispatch('comic/getComic', idComic)
  }


  onMounted(() => {
    if (!isCurrentComic) {
      getComic()

      /*  verifyComic: () => { */
      for (let k = 0; k < localStorage.length; k++) {
        const key = localStorage.key(k);
        const value = localStorage.getItem(key);
        console.log('key: ' + key + ', value:' + value);

      }
      /* } */

    }
  })

  return {

    getComic,

    isDataReady: computed(() => store.getters['comic/isCurrentComic']),
    dataComicId: computed(() => store.getters['comic/currentId']),
    dataComicName: computed(() => store.getters['comic/currentName']),
    dataComicImg: computed(() => store.getters['comic/currentImg']),
    dataComicGender: computed(() => store.getters['comic/currentGender']),
    dataComicType: computed(() => store.getters['comic/currentType']),

    EvaluationUp: () => {
      localStorage.setItem(idCurrent, true);
      localStorage.refreshItem();
    },
    EvaluationDown: () => {
      localStorage.setItem(idCurrent, false);
      localStorage.refreshItem();
    },



  }

}
export default useComicStore
