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

export const updateComic = ({ commit }, data) => {

  commit('updateRating', data)
  return { ok: true }
}
