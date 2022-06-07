import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({array}) => {
  console.log(array)
  return (
    <div>
      {!array ? <p>Nothing contacts</p> : array.map((obj, index)=>{
        return (
          <Tile obj={obj} key={index} />
        )
      })}
    </div>
  );
};
