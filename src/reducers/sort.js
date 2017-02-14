import { SORT } from '../actions/sort';

const defaultState = {
  key: null,
  direction: 'asc',
};

// this reducer stores the state of the sort and direction of the dataset
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SORT.SORT_BY:
      return {
        ...state,
        key: action.payload.key,
        direction: action.payload.direction,
      };

    default:
      return state
  }
};

export default reducer;