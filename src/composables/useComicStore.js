import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const useComicStore = () => {

  const store = useStore();

  const idComic = Math.floor(Math.random() * 826 + 1);

  onMounted(() => {
    if (!store.getters['comic/isCurrentComic']) {
      store.dispatch('comic/getComic', idComic)
    }
  })


  const getComic = async () => {
    const resp = await store.dispatch('comic/getComic', idComic)
    return resp
  }

  return {
    //State
    getComic,
    isDataReady: computed({
      get() {
        return store.getters['comic/isCurrentComic']
      }
    }),
    imgComic: computed({
      get() {
        return store.getters['comic/image']
      }
    })
    //Getters

    //Actions

    //Mutations


  }

}
export default useComicStore
