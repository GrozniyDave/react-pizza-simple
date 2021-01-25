import axios from 'axios';

export const setLoaded = (payload) => ({ type: 'SET_LOADING', payload });
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  // console.log('Sorted by: ' + sortBy, 'Filter: ' + category);
  dispatch(setLoaded(false));

  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&${sortBy === 'rating' ? `_order=desc` : `_order = asc`}`
    )
    .then(({ data }) => {
      // console.log('fetchPizzas action sent...');
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
