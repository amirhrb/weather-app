import axios from "axios";

//env
const OPENWETHERKEY = process.env.REACT_APP_SECRET_OPENWEATHER_KEY;

export const loadData = (_payload) => {
  return {
    type: "LOAD_DATA",
    payload: _payload,
  };
};
export const getCityData = (_payload) => {
  return {
    type: "GET_CITY_DATA",
    payload: _payload,
  };
};
export const saveCity = (_payload) => {
  return {
    type: "SAVE_CITY",
    payload: _payload,
  };
};
export const errorHandler = (_payload) => {
  return {
    type: "ERROR_HANDLE",
    payload: _payload,
  };
};

//searching for city then after tapping on one setting it as city state
export const citySearch = (value) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${OPENWETHERKEY}
        `
    )
    .then((res) => {
      dispatch(getCityData(res.data));
    });

  // dispatch(getCityData({}));
};
export const processData = () => (dispatch, getState) => {
  const city = getState().city;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWETHERKEY}&units=metric`
    )
    .then((res) => {
      if (res.data) {
        dispatch(loadData(res.data));
        dispatch(errorHandler({ value: false, message: "" }));
      }
    })
    .catch((error) => {
      dispatch(saveCity("Tehran"));
      dispatch(errorHandler({ value: true, message: error.message }));
    });
};
