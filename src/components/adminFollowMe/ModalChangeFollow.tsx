import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionFollow } from "./reducer/ActionFollow";
import { getActionFollows } from "./reducer/ActionFollows";
import "./style.scss";

interface IModalApp {
  childern: any;
  setModal: any;
  modal: any;
  postId: any;
}

export default function ModalChangeMessnger({
  childern,
  modal,
  setModal,
  postId,
}: IModalApp) {
  const dispatch = useAppDispatch();
  const { messenger } = useAppSelector((state) => state.MessengerReducer);
  const [update, setUpdate] = useState({
    title: `${messenger.title}`,
    id: postId,
    user: getIdUserParams(),
    url: `${messenger.url}`,
  });

  const updatePost = () => {
    API.patch(`social/${postId}`, update)
      .then((res) => {
        alert("Success");
        dispatch(getActionFollow(postId));
        dispatch(getActionFollows());
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionFollows());
    dispatch(getActionFollow(postId));
  }, [postId]);

  return (
    <div>
      <div
        className={`modal ${
          modal ? "active" : ""
        } max-w-[750px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
      >
        <div className="max-w-[500px] mx-auto relative">
          <div className="w-[100%] flex justify-between items-center pb-[25px]">
            <p className="text-[24px]">Change messenger</p>
            <p className="font-[400]" onClick={() => setModal(false)}>
              Close
            </p>
          </div>
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Change description title
            </label>
            <input
              type="text"
              defaultValue={messenger.title}
              placeholder="Enter your nickname..."
              style={{ resize: "none" }}
              className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
              onChange={(e) => setUpdate({ ...update, title: e.target.value })}
            />
          </div>
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Change URL:
            </label>
            <input
              type="text"
              defaultValue={messenger.url}
              placeholder="Enter your nickname..."
              style={{ resize: "none" }}
              className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
              onChange={(e) => setUpdate({ ...update, url: e.target.value })}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-white text-black rounded-[50px] px-[35px] py-[10px]"
              onClick={() => updatePost()}
            >
              save change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
