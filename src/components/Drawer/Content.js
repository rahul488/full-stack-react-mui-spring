import React, { memo } from "react";
import { Outlet } from "react-router";
import { StyleContentBox } from "../../Style";


const Content = ({ sidebar=false }) => {
  return (
    <StyleContentBox sidebar={sidebar}>
      <Outlet />
    </StyleContentBox>
  );
};
export default memo(Content);
