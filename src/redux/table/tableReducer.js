import { REQUESTED_TABLEDATA, REQUESTED_TABLEDATA_SUCCEEDED, REQUESTED_TABLEDATA_FAILED, GET_FILTERED_DATA  } from './tableTypes';
 
const initialState = {
  fetchedData: '',
  loading: false,
  error: false,
  filteredData:''
};
const tableReducer = (state = initialState, action) => {

  switch (action.type) {
    case REQUESTED_TABLEDATA:
      return {
      	...state,//current copy of state,
        fetchedData: '',
        loading: true,
        error: false, 
      };
    case REQUESTED_TABLEDATA_SUCCEEDED:
      return {
      	...state,//current copy of state
        fetchedData: action.fetchedData,
        loading: false,
        error: false,
      };
    case REQUESTED_TABLEDATA_FAILED:
      return {
      	...state,//current copy of state
        fetchedData: '',
        loading: false,
        error: true,
      };
    case GET_FILTERED_DATA:
   
    return{
          ...state,//current copy of state
         filteredData: state.fetchedData.filter((value,key) => { 
                        console.log(value);
                        return (value['title'].toLowerCase().includes(action.payLoad.toLowerCase()));  

                      })
    };
    default:
      return state;
  }
};
 
 export default tableReducer//importing in rootReducer(which is collection of all reducer)