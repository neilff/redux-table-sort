import planetData from './mock/planets';

const defaultState = planetData;

// Not implementing anything here, typically data would be loaded async, and
// you might do an action that is used to show a loading spinner, and then
// hide it, and maybe you manipulate data before setting it into the store
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default reducer;