import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

import mockData from '../mock/planets';

export const DATA = createTypes('DATA', [
  'LOAD',
  'LOAD_SUCCESS',
  'LOAD_FAIL',
]);

const loadData = () => createAction(DATA.LOAD);
const loadDataSuccess = (result) => createAction(DATA.LOAD_SUCCESS, result);
const loadDataFail = (error) => createAction(DATA.LOAD_FAIL, error);

export const requestData = () => {
  return (dispatch) => {
    dispatch(loadData()); // inform reducer we are going to do async, will show loading spinner

    // this code here simulates talking to an API, it will pretend the request takes
    // 2000ms to complete. this will always result in a successful result. the catch
    // is there to demo how to handle errors
    setTimeout(() => {
      Promise.resolve(mockData)
        .then((result) => dispatch(loadDataSuccess(result)))
        .catch((error) => dispatch(loadDataFail(error)));
    }, 2000);
  }
};
