import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { getUser } from "../../pages/interface/getUser/redux/reducer";
import { getIdUserParams } from "../helper";
import ProfileModal from "./ProfileModal";

export default function Profile() {
  const [modal, setModal] = useState(false);
  const id = getIdUserParams();
  const { user } = useAppSelector((state) => state.getUser);
  useEffect(() => {
    // dispatch(getUser.actions.getUser);
    axios
      .get(`http://64.227.177.107:8000/user/` + id)
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  return (
    <div className="max-w-[500px] mx-auto px-[22px]">
      <div
        className="w-full h-[250px] bg-red-400 flex items-center justify-center"
        style={{
          background: `url(${user.background}) no-repeat center/cover`,
        }}
      >
        {user.avatar && (
          <img
            src={user.avatar}
            alt="no image"
            className="w-[100px] h-[100px] rounded-full object-cover mt-[40px]"
          />
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setModal(true)}
          className="bg-[rgba(208, 188, 255, 0.08)] text-[#D0BCFF] border-2 border-[#D0BCFF] px-[10px] py-[7px] mx-auto rounded-[100px]"
        >
          Edit profile
        </button>
      </div>
      {<ProfileModal modal={modal} setModal={setModal} />}
    </div>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
