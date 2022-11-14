import { NavLink, Route, Routes } from "react-router-dom";
import MediaCardPhotos from "./MediaCardPhotos";
import MediaCardVideos from "./MediaCardVideos";

interface IMedia {
  children: JSX.Element;
}

export default function Media({ children }: IMedia) {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "11px",
    textDecorationThickness: "2px",
    color: "white",
  };

  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      <div className="w-full mt-[20px] flex justify-evenly text-[#BEBEBE] mb-[33px]">
        <NavLink
          to="/photos"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Photos
        </NavLink>
        <NavLink
          to="/videos"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Videos
        </NavLink>
      </div>
      {children}
    </div>
  );
}
