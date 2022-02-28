export function someMutation(/* state */) { }
export function saveData(state, comic) {
  /* state.id = comic.id
  state.name = comic.name
  state.status = comic.status
  state.species = comic.species
  state.type = comic.type
  state.gender = comic.gender
  state.origin.name = comic.origin.name
  state.location.name = comic.location.name
  state.image = comic.image */
  state.currentComic = comic,
    state.isData = true;
}
