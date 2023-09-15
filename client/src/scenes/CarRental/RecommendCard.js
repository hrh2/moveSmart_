import React from "react";

const RecommendCarCard = (props) => {
  const { carName, retweet, imgUrl, rentPrice, percentage,color } = props.item;
  return (
    <div className={` p-[20px] rounded-md cursor-pointer md:w-1/3 sm:w-1/2  w-full ${color}`}>
      <div className="recommend__car-top">
        <h5 className=" flex items-center gap-4 mb-[10px]">
          <span>
            <i class="ri-refresh-line text-[1.3rem]"></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>

      <div className="">
        <img src={imgUrl} alt="" />
      </div>
      <div className="md:text-[1.3rem] text-base my-[10px]">
        <h4>{carName}</h4>
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
          <span>${rentPrice}/h</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCarCard;
