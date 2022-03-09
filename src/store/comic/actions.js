import { instanceApi } from 'boot/axios';

export const getComic = async ({ commit }, idComic) => {

  try {
    commit('isLoadingData')

    const customData = {
      method: "get",
      //url: `/${idComic}/info.0.json`,
      url: `/${idComic}`,
    };

    const { data } = await instanceApi(customData)
    commit('saveData', data)

    return { ok: true }

  } catch (error) {
    return { ok: false, message: error }
  }
}

export const updateLike = ({ commit }, condition) => {
  if (condition === 'true') {
    const data = { up: true, down: false }
    commit('myChoice', data)

  } else if (condition === 'false') {
    const data = { up: false, down: true }
    commit('myChoice', data)
  }
  else if (condition === 'notRating') {
    const data = { up: false, down: false }
    commit('myChoice', data)
  }

}
