import React from "react";
import withActivePin from "../../hocs/with-active-pin/with-active-pin";

const MainMap = () => {
  return (
    <div
      id="map"
    />
  );
};

export default withActivePin(React.memo(MainMap));
