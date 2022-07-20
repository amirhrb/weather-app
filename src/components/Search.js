import React from "react";

//hooks
import { useDispatch, useSelector } from "react-redux";

//actions
import { citySearch, saveCity } from "../Redux/weather/weatherActions";

const Search = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Search for cities ..."
        className="h-8 my-2 input input-ghost w-full max-w-xs"
        onChange={(el) => {
          if (el.target.value) {
            dispatch(citySearch(el.target.value));
            el.target.focus();
          }
        }}
      />
      {state.searchData.length ? (
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full text-base !whitespace-normal">
            <thead>
              <tr className="!w-56 ">
                <th className="!relative ">city</th>
                <th>country</th>
              </tr>
            </thead>
            <tbody>
              {state.searchData.map((city) => {
                return (
                  <tr
                    key={city.name + Math.random().toFixed(5)}
                    className="cursor-pointer w-56 "
                    onClick={() => {
                      dispatch(saveCity(city.name));
                      document.body.focus();
                    }}
                  >
                    <td className="w-24 !overflow-hidden">{city.name}</td>
                    <td className="!whitespace-normal">{city.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
