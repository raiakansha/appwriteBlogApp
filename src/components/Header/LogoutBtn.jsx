/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
    alert("You have been logout successfully!!");
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-gray-200 rounded-full text-black text-xl font-bold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
