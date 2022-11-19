import React, { useState } from "react";
import ArrowsIcons from "../../assets/svg/ArrowIcons";

import "./style.scss";

interface IAccordionProps {
  title: string;
  subTitle: any;
  decsription?: any;
}

export default function AccordioContact({
  title,
  subTitle,
  decsription,
}: IAccordionProps) {
  const [active, setActive] = useState(false);
  return (
    <div className="max-w-[374px] mx-auto px-[22px] mb-[10px]">
      <div
        className={`accordion ${
          active ? "active" : ""
        } py-[11px] px-[15px] bg-[#0B0B0B] rounded-[2px] `}
      >
        <div
          className="text-white cursor-pointer flex items-center justify-between"
          onClick={() => setActive(!active)}
        >
          <p>● {title}</p>
          <div className="accordion__icon">
            <ArrowsIcons />
          </div>
        </div>
        <div className="accordion__content ">
          <p className="text-[16px] font-[400] pb-[21px] pt-[50px]">
            {subTitle}
          </p>
          <p className="accordion__content pl-[10px] font-[300] py-[11px] rounded-[3px] bg-[#131313]">
            {decsription}
          </p>
        </div>
      </div>
    </div>
  );
}
