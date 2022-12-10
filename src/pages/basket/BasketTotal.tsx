import React, { FC } from 'react'

interface IProps {
  totalPrice: number
}

const BasketTotal: FC<IProps> = ({ totalPrice }) => {
  return (
    <div className="w-full flex justify-end py-2">
      <div className="w-[50%] max-md:w-full flex justify-between items-center px-8">
        <p className="font-[900] text-[30px]">Total:</p>
        <p className="font-[900] text-[30px] uppercase">{totalPrice} AED</p>
      </div>
    </div>
  )
}

export default BasketTotal
