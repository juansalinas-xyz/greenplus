import React from "react";
import Card from "../Card/Card";

function OurServicesCards({ items }) {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-0"> 
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
