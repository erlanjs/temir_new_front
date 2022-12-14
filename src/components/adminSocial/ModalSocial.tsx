import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";

import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionSocails } from "./reducer/ActionSocial";
import "./style.scss";

interface IModalApp {
  childern: any;
  setModal: any;
  modal: any;
}

export default function ModalSocial({ modal, setModal }: IModalApp) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [nameSocial, setNameSocial] = useState({ id: "", label: "" });
  const [socials, setSocials] = useState("");
  const [socialCategory, setSocailCategory] = useState([
    { name: "instagram" },
    { name: "facebook" },
  ]);
  const [descSocail, setDescSocail] = useState("");

  const showMessenger = (
    items: any,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (items.label) {
      case "instagram":
        return setSocials(`https://www.instagram/${event?.target?.value}`);
      case "facebook":
        return setSocials(`https://www.facebook/${event?.target?.value}/`);
      default:
        return setSocials(`${event?.target?.value}`);
    }
  };

  const postSocial = () => {
    API.post("social/", {
      user: getIdUserParams(),
      title: descSocail,
      url: socials,
      social: nameSocial.id,
    })
      .then((res) => {
        console.log(res);
        alert("success");
        setDescSocail("");
        setSocials("");
        setNameSocial({ id: "", label: "" });
        dispatch(getActionSocails());
      })
      .catch((error) => {
        alert("Error");
        setDescSocail("");
        setSocials("");
        setNameSocial({ id: "", label: "" });
      });
  };

  return (
    <div
      className={`modal ${
        modal ? "active" : ""
      } max-w-[500px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
    >
      <div className="max-w-[500px] mx-auto relative">
        <div className="w-[100%] flex justify-between items-center pb-[25px]">
          <p className="text-[24px]">Add social</p>
          <p className="font-[400]" onClick={() => setModal(false)}>
            Close
          </p>
        </div>
        <div>
          <div className="font-medium text-black">
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Social name:
              </label>
              <input
                type="text"
                value={nameSocial.label}
                placeholder="Enter messenger name..."
                className={`bg-transparent w-[100%] pl-[16px] max-h-auto font-[400]`}
                onClick={() => setActive(active ? false : true)}
                style={
                  nameSocial.label.length > 0
                    ? { color: "black" }
                    : { color: "rgba(125, 122, 133, 0.81)" }
                }
                onChange={(e) =>
                  setNameSocial({ ...nameSocial, label: e.target.value })
                }
              />
            </div>
            <ul
              style={{ display: active ? "block" : "none" }}
              className={`bg-white overflow-y-auto max-h-60 mt-[-17px] absolute w-[100%]`}
            >
              {socialCategory?.map(
                (item: any, index: Key | null | undefined) => (
                  <li
                    onClick={() =>
                      setNameSocial({
                        id: item.id,
                        label: item.name.toLowerCase(),
                      })
                    }
                    key={index}
                    className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer"
                  >
                    {item?.name}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Social title:
          </label>
          <input
            type="text"
            value={descSocail}
            placeholder="Enter messenger name..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => setDescSocail(e.target.value)}
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">URL: </label>
          <input
            type="text"
            defaultValue={socials}
            placeholder="Enter your nickname..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => showMessenger(nameSocial, e)}
          />
        </div>
        <button
          onClick={postSocial}
          className="bg-white text-black rounded-[50px] px-[35px] py-[10px] "
        >
          Add
        </button>
      </div>
    </div>
  );
}
