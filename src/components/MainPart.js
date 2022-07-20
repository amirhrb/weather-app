import React, { useEffect } from "react";

import hotWet from "../sources/hot-wet.jpg";

//component
import RadialProgress from "./RadialProgress";
import Skeleton from "./Skeleton";
import Footer from "./Footer";

//redux hooks
import { useDispatch, useSelector } from "react-redux";

//redux action
import { processData } from "../Redux/weather/weatherActions";

const MainPart = () => {
  const dispatch = useDispatch();
  const { city, current, isLoading } = useSelector((state) => state);
  useEffect(() => {
    dispatch(processData());
  }, [dispatch, city]);

  return (
    <>
      <div
        className="max-w-[800px] min-w-[150px] w-[90%] mt-3 mb-10 h-fit py-5
      flex flex-col items-center rounded-md overflow-hidden bg-cover bg-center "
        style={{
          backgroundImage: `url(${hotWet})`,
        }}
      >
        <div
          className="w-full relative flex flex-col z-0 justify-center items-center  
            bg-cover bg-center min-h-[75vh] h-full"
        >
          <div
            className="
              max-w-lg w-4/5 h-5/6 min-h-fit p-5 z-20 rounded-lg
              flex flex-col justify-between items-stretch
              sm:grid sm:grid-cols-4 sm:grid-rows-4 
              bg-primary-content bg-opacity-25 backdrop-blur-sm shadow-xl"
          >
            {!isLoading ? (
              <h2 className="text-3xl font-bold row-start-1 row-end-2 col-start-1 col-end-3 sm:self-center">
                {current.name}
              </h2>
            ) : (
              <div className="row-start-1 row-end-2 col-start-1 col-end-3">
                <Skeleton width="5.9" height="1.5" rounded="1" />
              </div>
            )}
            {!isLoading ? (
              <div className="w-20 rounded-lg relative row-start-2 row-end-3 col-start-1 col-end-2 ">
                <div className="w-full h-full absolute bg-base-200 opacity-15 blur-3xl"></div>
                <img
                  className="w-24"
                  src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
            ) : (
              <div className="row-start-2 row-end-3 col-start-1 col-end-2">
                <Skeleton width="3" height="3" rounded="1.5" />
              </div>
            )}
            {!isLoading ? (
              <div className=" row-start-3 row-end-4 col-start-1 col-end-3">
                <h2 className="text-2xl ">{`${current.main.temp} C°`}</h2>
                <h5 className="text-sm inline-block">it feels like </h5>
                <br />
                <span className="text-sm ">{`${current.main.feels_like} C°`}</span>
              </div>
            ) : (
              <div className="row-start-3 row-end-4 col-start-1 col-end-3 ">
                <Skeleton width="8" height="1.5" rounded="1" margin="my-2" />
                <Skeleton width="9" height="1" rounded="1" margin="my-2" />
              </div>
            )}
            {!isLoading ? (
              <div className="my-5 row-start-2 row-end-3 col-start-3 sm:row-start-1 sm:row-end-2 ">
                <RadialProgress value={current.main.humidity} />
              </div>
            ) : (
              <div className="my-5 row-start-2 row-end-3 col-start-3 sm:row-start-1 sm:row-end-2 z">
                <Skeleton width="5.5" height="5.5" rounded="2.75" />
              </div>
            )}
            {!isLoading ? (
              <div className="my-5 row-start-4 col-start-1">
                <h5 className="text-2xl tracking-wide">
                  {current.weather[0].main}
                </h5>
                <h5>{current.weather[0].description}</h5>
              </div>
            ) : (
              <div className="my-5 row-start-4 col-start-1 ">
                <Skeleton width="4" height="1.5" rounded="0.75" margin="my-2" />
                <Skeleton width="5" height="1" rounded="0.75" margin="my-2" />
              </div>
            )}
            {!isLoading ? (
              <div className="row-start-3 col-start-3 col-end-5 flex flex-col">
                <span className="text-2xl">visibility </span>
                <span className="text-sm">{current.visibility / 1000}km</span>
              </div>
            ) : (
              <div className="row-start-3 col-start-3 ">
                <Skeleton width="4" height="1.5" rounded="0.75" margin="my-2" />
                <Skeleton width="5" height="1" rounded="0.75" margin="my-2" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPart;
