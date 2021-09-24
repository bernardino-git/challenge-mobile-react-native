import { Reducer } from 'redux';
import { ComicsState, ComicsTypes } from './types';

const INITIAL_STATE: ComicsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ComicsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ComicsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ComicsTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ComicsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
