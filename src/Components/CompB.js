import React, { useContext } from "react";
import CompC from "./CompC";
import { UserContext, channelContext } from "../App";

const CompB = () => {
  const user = useContext(UserContext);
  const channel = useContext(channelContext);
  return (
    <>
      <CompC />
      {user} and {channel}
    </>
  );
};

export default CompB;
