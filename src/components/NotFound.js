import React from "react";
import { Link } from "react-router-dom";

import notFound from "../sources/notFound.jpg";

const NotFound = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${notFound})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404!</h1>
            <p className="mb-5">
              Page you requested <br />
              Was Not Found!
            </p>

            <Link to="/" className="btn btn-primary">
              go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
