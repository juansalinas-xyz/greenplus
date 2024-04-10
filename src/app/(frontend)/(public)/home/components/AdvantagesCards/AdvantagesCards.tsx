import React from "react";
import CardAdv from "../CardAdv/CardAdv";

function AdvantagesCards({ items }) {
  return (
    <div className="flex flex-row">
      {items.map((item, index) => (
        <CardAdv
          key={index}
          icon={item.icon}
          title={item.title} 
          img={item.img}        
          />
      ))}
    </div>
  );
}

export default AdvantagesCards;
