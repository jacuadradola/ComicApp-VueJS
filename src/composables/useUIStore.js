import { computed } from 'vue'
import { useStore } from 'vuex'

const useUIStore = () =>{

  const store = useStore()

  return{

    sideMenuOpen: computed({
      get(){
        return store.getters["ui/isSideMenuOpen"]
      },
      set(val){
        store.commit("ui/toggleSideMenu")
      }
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  }

}
export default useUIStore
