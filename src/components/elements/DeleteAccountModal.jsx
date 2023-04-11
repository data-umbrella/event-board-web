import CloseBtn from 'assets/ui/close-icon.svg'
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/authentication";
// import React, { Component }  from 'react';


const DeleteModal = ({ setModalOn, setChoice }) => {
  const handleDeleteClick = () => {
    setChoice(true);
    setModalOn(false);
    const auth = useAuth()
    auth.deleteAccount();
 
  };

  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="   bg-zinc-200 opacity-90 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center bg-white py-12 px-24 border-2 border-black rounded-xl ">
          <div>
            <button
              onClick={handleCancelClick}
              className="flex rounded float-right px-4 py-2 ml-4"
            >
              <img src={CloseBtn} />
            </button>
          </div>
          <div className="flex  text-lg  text-zinc-600   mb-10">
            Are you sure you want to delete your data events account ?
          </div>
          <div className="flex float-right ">
            <Link
              className="block underline underline-offset-4 text-lg text-red-600 p-8 dark:text-red-600"
              to="/settings"
              onClick={handleDeleteClick}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
