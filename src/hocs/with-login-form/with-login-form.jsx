import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);

      this.loginRef = createRef();
      this.passwordRef = createRef();

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }

    render() {
      return (
        <Component
          handleSubmit={this.handleSubmit}
          ref={{
            loginRef: this.loginRef,
            passwordRef: this.passwordRef,
          }}
          {...this.props}
        />
      );
    }
  }

  WithLoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithLoginForm;
};

export default withLoginForm;
