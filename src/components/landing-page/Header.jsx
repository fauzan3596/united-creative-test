import React from "react";
import { charts } from "../../constants";
import ChartCard from "./ChartCard";

const Header = () => {
  return (
    <header className="lg:px-16 px-5 pt-19.5 text-white flex flex-col gap-6">
      <h1 className="font-bold text-[2.5rem] leading-[46.88px]">Pasar</h1>
      <p className="leading-[18.75px]">
        Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
      </p>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {charts.map((chart, index) => (
          <ChartCard key={index} chart={chart} />
        ))}
      </div>
    </header>
  );
};

export default Header;
