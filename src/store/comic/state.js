export default function () {
  return {
    isData: false,
    currentComic: {},
    id: null,
    name: "",
    image: "",
    type: "",
    gender: "",
    isLoadingRating: false,
    rating: "",
    like: false,
    notLike: false,
    comic: [
      { id: null, name: "", image: "", type: "", gender: "", }
    ]
  };
}
