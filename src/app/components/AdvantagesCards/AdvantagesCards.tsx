import React from "react";
import CardAdv from "../CardAdv/CardAdv";

function AdvantagesCards({ items }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      {items.map((item, index) => (
        <CardAdv
          key={index}
          icon={item.icon}
          title={item.title}
          img={item.img} 
          img_responsive={item.img_responsive}          
          />
      ))}
    </div>
  );
}

export default AdvantagesCards;
