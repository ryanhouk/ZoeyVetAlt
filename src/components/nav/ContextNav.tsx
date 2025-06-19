import React from "react";

const ContextNav = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-teal-700">
        CONTEXT NAV: This is a top-level navigation which provides actions
        unique to the view it&apos;s in. For example the Patient view and the
        active visit, Tasks, Reports, Inventory Management, etc.
      </div>
    </>
  );
};

export default ContextNav;
