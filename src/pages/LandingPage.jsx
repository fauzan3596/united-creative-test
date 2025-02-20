import React from "react";
import { FavoriteTableTab, Header, TableData } from "../components";

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-b from-[#02154500] to-[#010C28] pb-12">
      <Header />
      <FavoriteTableTab />
      <TableData />
    </main>
  );
};

export default LandingPage;
