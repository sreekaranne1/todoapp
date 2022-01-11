import React from "react";
import MainNavigation from "./MainNavigation";
import Filter from "./Filter";

const Layout = (props) => {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <MainNavigation />
      <Filter />
      <div class="p-2 mx-4 border-black-25 border-bottom"></div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
