import React from "react";
import Card from "../Card/Card";

function OurServicesCards({ items }) {
  return (
    <div className="flex flex-row"> 
      {items.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default OurServicesCards;
