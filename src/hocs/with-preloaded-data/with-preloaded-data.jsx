import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPreloadedData = (Component) => {
  class WithPreloadedData extends PureComponent {

    componentDidMount() {
      const {loadOfferData, id} = this.props;

      loadOfferData(id);
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithPreloadedData.propTypes = {
    loadOfferData: PropTypes.func,
    id: PropTypes.number,
  };

  return WithPreloadedData;
};

export default withPreloadedData;
