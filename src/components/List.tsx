// import React from "react";
import retro from "/image-retro-pcs.jpg";
import top from "/image-top-laptops.jpg";
import growth from "/image-gaming-growth.jpg";

export default function List() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex gap-5">
        <img src={retro} alt="retro pc" height={200} width={100} />
        <div className="flex flex-col justify-between">
          <p className="text-3xl leading-6 font-bold opacity-30">01</p>
          <p className="font-bold text-xl">Reviving Retro PCs</p>
          <p className="font-semibold opacity-70">
            What happens when old PCs are given modern upgrades.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <img src={top} alt="retro pc" height={200} width={100} />
        <div className="flex flex-col justify-between">
          <p className="text-3xl leading-6 font-bold opacity-30">02</p>
          <p className="font-bold text-xl">Top 10 Laptops of 2022</p>
          <p className="font-semibold opacity-70">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <img src={growth} alt="retro pc" height={200} width={100} />
        <div className="flex flex-col justify-between">
          <p className="text-3xl leading-6 font-bold opacity-30">03</p>
          <p className="font-bold text-xl">The Growth of Gaming</p>
          <p className="font-semibold opacity-70">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
