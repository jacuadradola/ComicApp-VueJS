import { instanceApi } from 'boot/axios';

export const getComic = async ({ commit }, idComic) => {

  try {

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

export const evaluationComic = ({ commit }, temp) => {

  console.log(temp);

  //commit('saveData', data)

  return { ok: true }
}
