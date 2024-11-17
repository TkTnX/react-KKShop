import { useState } from "react";
import { OrderTimes } from "../../../../contants";
import { cn } from "../../../../lib/utils";
import { useOrderStore } from "../../../../store/useOrderStore";

const ChangeDate = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const changeDate = useOrderStore((state) => state.changeDate);

  const handleChangeDate = (date: number) => {
    setSelectedDate(date);
    changeDate(`${OrderTimes[date].day} ${OrderTimes[date].time}`);
  };

  return (
    <div className=" flex flex-start gap-[92px] text-left">
      <h6 className="text-xl font-bold w-1/3">Дата и время</h6>
      <div className="w-2/3 flex items-center">
        {OrderTimes.map((time, index) => (
          <button
            onClick={() => handleChangeDate(index)}
            className={cn(" text-left p-2 border border-grey-light flex flex-col", {
              "border-black": selectedDate === index,
            })}
            key={index}
          >
            <b className="font-bold">{time.day}</b>
            <span className="text-[8px]">{time.time}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangeDate;
