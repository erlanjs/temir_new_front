import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionProduct } from "../../components/products/reducer/ActionProduct";
import API from "../api/Api";
import { getActionProductAdmin } from "./reducer/ActionAdminProduct";
import { getIdUserParams } from "../helper";

export default function AdminProduct() {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.ReducerProduct);
  const [updateImage, setUpdateImage] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [productId, setProductId] = useState("");
  const [active, setActive] = useState(true);
  const deletePost = (post: any) => {
    API.delete(`image/${post.id}`)
      .then(() => {
        dispatch(getActionProduct());
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setUpdateImage(i);
    }
  };

  const uploadToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", getIdUserParams());
    formData.append("title", titleUpdate);
    updateImage?.length === 0
      ? console.log("error")
      : formData.append("image", updateImage);

    await API.patch(`product/${productId}`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionProduct());
        dispatch(getActionProductAdmin(productId));
      })
      .catch(() => {
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionProduct());
  }, []);

  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      {product.map((items, index) => (
        <div className="mb-[33px]" key={index}>
          <input
            id="file-upload"
            onChange={(e) => uploadToClient(e)}
            accept="image/png, image/gif, image/jpeg"
            type="file"
            style={{ display: "none" }}
            ref={ref}
          />
          <img
            src={items.image}
            alt="no img"
            onClick={() => {
              !active && ref?.current?.click();
            }}
            className="w-full object-cover h-[222px] rounded-[16px] mb-[19px] object-cover"
          />
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Theme to product:
            </label>
            <input
              disabled={active}
              defaultValue={items.title}
              type="text"
              placeholder="text"
              className="bg-transparent w-[100%] pl-[16px]"
            />
          </div>
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Theme to product:
            </label>
            <textarea
              disabled={active}
              defaultValue={items.title}
              placeholder="text"
              style={{ resize: "none" }}
              className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            ></textarea>
          </div>
          <div className="flex justify-end pt-[30px] pb-[50px]">
            <button
              onClick={() => deletePost(items)}
              className="px-[20px] mr-[15px] text-[14px] py-[10px] border-[1.5px] border-[#FF0000] text-[#FF0000] font-[500] rounded-[50px]"
            >
              delete
            </button>
            {active && (
              <button
                style={{ background: "rgba(208, 188, 255, 0.08)" }}
                className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
                onClick={() => {
                  setProductId(items.id);
                  setActive(!active);
                }}
              >
                change
              </button>
            )}
            {/* {!active && (
              <button
                className="px-[20px]  text-[14px] py-[10px] bg-white text-black font-[500] rounded-[50px]"
                onClick={(e: any) => {
                  setActive(true);
                  uploadToServer(e);
                }}
              >
                save
              </button>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}
