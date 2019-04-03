// Action Creator which returns an Action
export const selectMovie = (movie) => ({
  type: 'MOVIE_SELECTED',
  payload: movie
})