import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const useComicStore = () => {

  const store = useStore();
  const idRandom = Math.floor(Math.random() * 826 + 1)

  const isDataReady = computed(() => store.getters['comic/isCurrentComic'])
  const dataComicId = computed(() => store.getters['comic/currentId'])
  const dataComicName = computed(() => store.getters['comic/currentName'])
  const dataComicImg = computed(() => store.getters['comic/currentImg'])
  const dataComicGender = computed(() => store.getters['comic/currentGender'])
  const dataComicType = computed(() => store.getters['comic/currentType'])
  const like = computed(() => store.getters['comic/isLike'])
  const notLike = computed(() => store.getters['comic/isNotLike'])
  const isCurrentComic = computed(() => store.getters['comic/isCurrentComic'])

  const getComic = async () => {
    restartRating()
    await store.dispatch('comic/getComic', idRandom)
  }

  async function verifyComic() {
    restartRating()
    for (let k = 0; k < localStorage.length; k++) {

      if (localStorage.key(k) == dataComicId.value) {
        const key = localStorage.key(k);
        const value = localStorage.getItem(key);
        await store.dispatch('comic/updateLike', value)
      }
    }
  }
  async function restartRating() {
    const value = 'notRating'
    await store.dispatch('comic/updateLike', value)
  }

  onMounted(async () => {
    if (!isCurrentComic.value) {
      restartRating()
      getComic()
      verifyComic()
    }
  })

  return {

    getComic,
    like,
    notLike,
    isDataReady,
    dataComicId,
    dataComicName,
    dataComicImg,
    dataComicGender,
    dataComicType,

    EvaluationUp: async () => {
      localStorage.setItem(dataComicId.value, true);
      await verifyComic()
      setTimeout(() => {
        getComic()
      }, 3000);
    },
    EvaluationDown: async () => {
      localStorage.setItem(dataComicId.value, false);
      await verifyComic()
      setTimeout(() => {
        getComic()
      }, 3000);
    },
  }

}
export default useComicStore
