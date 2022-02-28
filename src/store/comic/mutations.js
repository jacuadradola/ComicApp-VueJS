export function someMutation(/* state */) { }
export function saveData(state, comic) {
  state.id = comic.id
  state.name = comic.name
  state.image = comic.image
  state.status = comic.status
  state.isData = true;
}
