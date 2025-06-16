import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen bg-red-500 w-72">
        <div className="bg-red-500">
          <div>LOGO AREA</div>
          <div>NAV AREA</div>
        </div>
        <div className="bg-blue-500">BOTTOM</div>
      </div>
    </>
  );
};

export default Sidebar;
