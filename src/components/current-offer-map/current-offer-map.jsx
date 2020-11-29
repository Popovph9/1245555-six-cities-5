import React from "react";
import withInactivePin from "../../hocs/with-inactive-pin/with-inactive-pin";

const CurrentOfferMap = () => {
  return (
    <div
      id="map"
    ></div>
  );
};

export {CurrentOfferMap};

export default withInactivePin(React.memo(CurrentOfferMap));
