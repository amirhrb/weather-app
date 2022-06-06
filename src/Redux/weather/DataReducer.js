import 
const initialState = {
  data: [],
  loading: true,
  localStorage: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        data: action.payload,
        loading: false,
        localStorage: true,
      };
    case "GET_DATA":
      return;
    case "SAVE_DATA":
      return;
    case "GET_DATE":
      return;
    default:
      return state;
  }
};
export default weatherReducer;
