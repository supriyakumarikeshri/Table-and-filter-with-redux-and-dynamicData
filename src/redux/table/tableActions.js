import { REQUESTED_TABLEDATA, REQUESTED_TABLEDATA_SUCCEEDED, REQUESTED_TABLEDATA_FAILED, GET_FILTERED_DATA  } from './tableTypes';

 

// Action Creators
const requestTableData = () => {
  return { type: REQUESTED_TABLEDATA }
};

const requestTableDataSuccess = (data) => {
  return { type: REQUESTED_TABLEDATA_SUCCEEDED, fetchedData: data}
};

const requestTableDataError = () => {
  return { type: REQUESTED_TABLEDATA_FAILED }
};

//this method will get call from main app(TableContainer),
export const fetchTableData = () => {//importing in TableContainer
  return (dispatch) => {
    dispatch(requestTableData());//dispatching method for tableReducer
    fetch('https://jsonplaceholder.typicode.com/todos/') 
      .then(res => res.json())
      .then(
        data => dispatch(requestTableDataSuccess(data)),//dispatching method for tableReducer
        err => dispatch(requestTableDataError())//dispatching method for tableReducer
      );
  }
};

 
export const searchTableData = (text) => {
  return{
    type: GET_FILTERED_DATA,
    payLoad:  text
  }
}

// export const searchTableData = (text) => dispatch=>{
//   dispatch({
//     type: GET_FILTERED_DATA,
//     payLoad:  text
//   })
// }
