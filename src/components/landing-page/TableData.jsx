import React from "react";
import { dataTable } from "../../constants";

const header = [
  "Harga Terakhir",
  "Perubahan 24jam",
  "Tertinggi / Terendah 24jam",
  "Kapitalisasi Pasar",
  "Volume 24 Jam",
];

const TableData = () => {
  return (
    <section className="lg:px-16 px-5 pt-4 overflow-x-auto no-scrollbar">
      <table className="table border-b border-[#121B2E] min-w-max">
        <thead className="text-white text-right">
          <tr className="border-[#121B2E]">
            <th className="text-left font-normal">
              <div className="flex items-center gap-2">
                <p>Pasangan</p>
                <img src="/caret.svg" alt="Caret" className="w-2.5 h-4.25" />
              </div>
            </th>
            {header.map((item, index) => (
              <th key={index} className="font-normal">
                <div className="flex items-center justify-end gap-2">
                  <p>{item}</p>
                  <img src="/caret.svg" alt="Caret" className="w-2.5 h-4.25" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-right">
          {dataTable.map((item, index) => {
            const {
              icon,
              pasangan,
              hargaTerakhir,
              perubahan,
              maxMin,
              kapitalisasi,
              volume,
            } = item;
            return (
              <tr key={index} className="border-[#121B2E]">
                <td className="text-left">
                  <div className="flex items-center gap-4">
                    <img src={icon} alt="Star Icon" className="h-6 w-6" />
                    <p>{pasangan}</p>
                  </div>
                </td>
                <td className="z-1">{hargaTerakhir}</td>
                <td
                  className={
                    perubahan > 0 ? "text-[#6EDC86]" : "text-[#FF3B3B]"
                  }
                >
                  {perubahan > 0 ? `+${perubahan}` : `-${perubahan}`}%
                </td>
                <td>{maxMin}</td>
                <td>{kapitalisasi}</td>
                <td>{volume}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableData;
