import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

//components
import Search from "./Search";

const Navbar = () => {
  const toggleRef = useRef();
  const [value, setValue] = useState(false);
  //when toggle is active it is true => dark mode
  //so we check the value if is false => light mode
  useEffect(() => {
    if (localStorage.getItem("value"))
      setValue(JSON.parse(localStorage.getItem("value")));
  }, []);
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
    document.documentElement.dataset.theme = !value ? "winter" : "night";
  }, [value]);

  //there is a bug when click About Link the dropdown stays up
  //lets get the element and set when clicked then click on document (hidees the dropdown)
  const dropRef = useRef();
  const aboutRef = useRef();

  return (
    <div className="sticky top-0 z-30">
      <div className="navbar bg-base-100 relative rounded-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle"
              onClick={() => {
                dropRef.current.style.visibility = "visible";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              ref={dropRef}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 top-14 left-0 "
            >
              <li>
                <a>
                  <span>{value ? "Get lighter!" : "Get Dark!"}</span>
                  <input
                    ref={toggleRef}
                    type="checkbox"
                    checked={value}
                    className="toggle"
                    onChange={(e) => {
                      setValue((prev) => !prev);
                    }}
                  />
                </a>
              </li>
              <li>
                <Link
                  to="/About"
                  ref={aboutRef}
                  onClick={() => {
                    dropRef.current.style.visibility = "hidden";
                  }}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-xl " to="/home">
            weather
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end flex items-center">
            <button tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 top-16"
            >
              <Search />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
