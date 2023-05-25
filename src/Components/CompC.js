import React from "react";
import { UserContext, channelContext } from "../App";

const CompC = () => {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context is {user} and channel context is {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default CompC;
