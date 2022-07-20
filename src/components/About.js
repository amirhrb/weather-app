import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="relative min-w-fit w-1/2 mt-5 mx-2 rounded-lg overflow-hidden ">
        <div className="absolute w-full h-full -z-10 bg-primary-content"></div>
        <div className="p-2 pb-5 z-0">
          <div className="avatar animate-appear">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://avatars.githubusercontent.com/u/81120130?v=4"
                alt="gravatar"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mx-2 mt-5 mb-2">AmirH RB</h2>
          <ul className="mx-5">
            <li>React Js Developer</li>
            <li>and also a kind nurse(:</li>
          </ul>
          <h2 className="text-xl font-bold mx-2 mt-2 mb-2">
            <Link to="/">Weather App</Link>
          </h2>
          <ul className="mx-5">
            <li>
              <a href="https://tailwindcss.com" className="link-hover">
                tailwind
              </a>{" "}
              and{" "}
              <a href="https://daisyui.com" className="link-hover">
                daisyUI
              </a>
            </li>
            <li>and finally powered by React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
