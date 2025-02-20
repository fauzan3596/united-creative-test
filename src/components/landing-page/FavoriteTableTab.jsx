import React, { useState } from "react";
import { tabList } from "../../constants";
import TabList from "./TabList";

const FavoriteTableTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section className="lg:px-16 px-5 pt-[43.5px] flex sm:flex-row flex-col sm:items-center gap-7.25">
      <h2 className="font-bold text-2xl leading-[28.13px]">Favorit</h2>
      <div role="tablist" className="tabs tabs-border font-bold -mx-2">
        {tabList.map((tab) => (
          <TabList
            key={tab.index}
            tab={tab}
            selectedIndex={selectedIndex}
            onTabChange={handleTabChange}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoriteTableTab;
