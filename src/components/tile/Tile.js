import React from "react";

export const Tile = ({obj}) => {
  return (
    <div className="tile-container">
      {Object.values(obj).map((data, index)=>{
        if(index === 0){
          return <p className="tile-title" key={index}>{data}</p>
        }
        return <p className="tile" key={index}>{data}</p>
      })}
    </div>
  );
};
