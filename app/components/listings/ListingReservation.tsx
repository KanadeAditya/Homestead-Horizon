'use client';

import { Range } from "react-date-range";

import Button from "../Button";
import Calender from "../Inputs/Calender";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
      bg-blue-100
        border-blue-400  
        rounded-xl 
        border-[2px]
        p-2
        overflow-hidden
      "
    >
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
        ₹ {price}
        </div>
        <div className="font-light text-blue-400">
          /night
        </div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Reserve" 
          onClick={onSubmit}
        />
      </div>
      <hr className="border-neutral-500"/>
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div className="text-blue-400">
          Total
        </div>
        <div text-blue-400>
        ₹ {totalPrice}
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;