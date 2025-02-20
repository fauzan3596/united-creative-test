import React from "react";

const ChartCard = ({ chart }) => {
  const { currency, value, percentage, volume, src } = chart;

  return (
    <section className="bg-[#0B132280] backdrop-blur-[20px] h-[130px] rounded-lg p-4">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-[16.41px]">{currency}</p>
          <p className="text-xl font-bold leading-[23.44px]">
            Rp {value.toLocaleString("en-US")}
          </p>
          <p
            className={`text-sm leading-[16.41px] ${
              percentage < 0 ? "text-[#FF3B3B]" : "text-[#6EDC86]"
            }`}
          >
            {percentage < 0 ? percentage : "+" + percentage}%
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img src={src} alt="Chart" className="w-36" />
          <p className="text-[#959595] text-sm font-bold leading-[16.41px]">
            Volume: {volume.toLocaleString("en-US")} IDR
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChartCard;
