import { COLUMN } from '../actions/column';

const defaultState = {
  omit: [],
};

// this reducer will be used to store columns that should be omitted from
// the sort table
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLUMN.TOGGLE_COLUMN:
      return {
        ...state,
        // add / remove the key from the array if it does not exist / exists
        omit: state.omit.includes(action.payload.key) ?
          state.omit.filter(i => i !== action.payload.key) :
          [ ...state.omit, action.payload.key],
      };

    default:
      return state
  }
};

export default reducer;