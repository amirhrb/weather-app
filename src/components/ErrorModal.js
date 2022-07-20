import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ErrorModal = () => {
  const toggle = useRef();
  const { error, errMessage } = useSelector((state) => state);
  useEffect(() => {
    if (error) {
      toggle.current.checked = true;
    }
    document.documentElement.addEventListener("click", () => {
      toggle.current.checked = false;
    });
  }, [error]);
  return (
    <div>
      <input ref={toggle} type="checkbox" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Sorry we did not find the city!</h3>
          <p className="py-4">{errMessage ? errMessage : ""}</p>
        </label>
      </label>
    </div>
  );
};

export default ErrorModal;
