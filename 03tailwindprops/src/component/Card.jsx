import React from "react";

const Card = ({username = "santo" , post = "Good Boy", myArr}) => {
  //console.log(props);
  
  return (
    <div className="flex items-center bg-gray-300 dark:bg-gray-800  rounded-md">
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-l"
            alt=""
            src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?uid=R32176361&ga=GA1.1.2028958094.1725276662&semt=ais_hybrid"
          />
        </div>
        <div class="flex items-center md:items-start">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500 p-2">{post}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span className = "p-2">{myArr}</span>
            <span className = "p-2">·</span>
            <span className = "p-2">2025</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
