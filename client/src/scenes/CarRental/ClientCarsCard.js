import React from "react";
import { FaTrash,FaEdit} from "react-icons/fa"

const RecommendCarCard = (props) => {
  const { carName, retweet, imgUrl, rentPrice, percentage,color } = props.item;
  return (
    <div className={` p-[20px] rounded-md cursor-pointer ${color}`}>
      <div className="recommend__car-top">
        <h5 className=" flex items-center gap-4 mb-[10px]">
          <span>
            <i class="ri-refresh-line text-[1.3rem]"></i>
          </span>
           Rating : {percentage}%
        </h5>
      </div>

      <div className="">
        <img src={imgUrl} alt="" />
      </div>
      <div className=" text-base my-[10px] ">
        <h4 className="text-shadow">{carName}</h4>
        <div className=" flex items-center justify-center">
          <div className="flex items-center justify-between gap-4">
            <p className=" flex items-center gap-4">
              <i class="ri-repeat-line"></i>
              {retweet}k
            </p>
            <p>
              <i class="ri-settings-2-line"></i>
            </p>
            <p>
              <i class="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>${rentPrice}/hr</span>
        </div>
      </div>
      <div className=" flex gap-4">
        <FaEdit size={20} className=""/>
        <FaTrash size={20} className="text-red-600 text-shadow"/>
      </div>
    </div>
  );
};

export default RecommendCarCard;
