export function someMutation(/* state */) { }
export function saveData(state, comic) {
  state.id = comic.id
  state.name = comic.name
  state.image = comic.image
  state.gender = comic.gender
  state.type = comic.type
  state.isData = true;
}

export function isLoadingData(state) {
  state.isData = !state.isData
}

export function myChoice(state, comic) {
  state.like = comic.up
  state.notLike = comic.down;
}
