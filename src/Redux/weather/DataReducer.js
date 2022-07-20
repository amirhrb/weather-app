const initialState = {
  current: null,
  city: "Tehran",
  searchData: {},
  isLoading: true,
  error: false,
  errMessage: "",
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        current: action.payload,
        isLoading: false,
      };
    case "ERROR_HANDLE":
      return {
        ...state,
        error: action.payload.value,
        errMessage: action.payload.message,
      };
    case "GET_CITY_DATA":
      return {
        ...state,
        searchData: action.payload,
      };
    case "SAVE_CITY":
      return {
        ...state,
        isLoading: true,
        city: action.payload ? action.payload : initialState.city,
      };
    default:
      return state;
  }
};
export default dataReducer;
