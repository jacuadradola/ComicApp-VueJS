import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const useComicStore = () => {

  const store = useStore();

  const idComic = Math.floor(Math.random() * 826 + 1);

  const getComic = async () => {
    const resp = await store.dispatch('comic/getComic', idComic)
    return resp
  }

  onMounted(() => {
    if (!store.getters['comic/isCurrentComic']) {
      getComic()
    }
  })

  return {

    //State

    //Getters
    isDataReady: computed(() => store.getters['comic/isCurrentComic']),
    dataComicId: computed(() => store.getters['comic/isCurrentId']),
    dataComicName: computed(() => store.getters['comic/isCurrentName']),
    dataComicImg: computed(() => store.getters['isCurrentImg/isCurrentImg']),

    //Actions
    getComic,

    //Mutations


  }

}
export default useComicStore
