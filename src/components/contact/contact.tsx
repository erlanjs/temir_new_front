import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AccordioContact from "./AccordionContact";
import { getActionBankCard } from "./reducer/AcctionBankCard";
import { getActionBankAccount } from "./reducer/ActionBankAccount";
import { getActionEmail } from "./reducer/ActionEmail";

const Contact = () => {
  const dispatch = useAppDispatch();
  const { bankAcc, bankCart, email } = useAppSelector(
    (state) => state.ReducerContact
  );
  useEffect(() => {
    dispatch(getActionBankAccount());
    dispatch(getActionEmail());
    dispatch(getActionBankCard());
  }, []);
  const emailUser = email.map((el) => el.email);
  const emailTitle = email.map((el) => el.title);
  const bankAccountSubTitle = bankAcc.map((el) => el.back_account);
  const bankAccountDesc = bankAcc.map((el) => el.title);
  const bankCardSubTitle = bankCart.map((el) => el.back_cart);
  const bankCardDesc = bankCart.map((el) => el.title);
  console.log(bankCart, "B");

  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      <AccordioContact
        title="E-mail"
        decsription={emailUser}
        subTitle={emailTitle}
      />
      <AccordioContact
        title="Bank detils"
        decsription={bankAccountDesc}
        subTitle={bankAccountSubTitle}
      />
      <AccordioContact
        title="Bank cards"
        decsription={bankCardDesc}
        subTitle={bankCardSubTitle}
      />
    </div>
  );
};

export default Contact;
