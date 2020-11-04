import React, {PureComponent} from "react";

const TEMPORARY_USERNAME = `current user`;

const TEMPORARY_AVATAR = `https://api.adorable.io/avatars/128`;


const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        authorAvatar: TEMPORARY_USERNAME,
        authorName: TEMPORARY_AVATAR,
        grade: ``,
        date: ``,
        text: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }


    handleRatingChange(evt) {
      evt.preventDefault();
      this.setState({grade: Number(evt.target.value)});
    }

    handleFieldChange(evt) {
      evt.preventDefault();
      this.setState({text: evt.target.value});
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      return (
        <Component
          handleSubmit = {this.handleSubmit}
          handleFieldChange = {this.handleFieldChange}
          handleRatingChange = {this.handleRatingChange}
          {...this.props}
        />
      );
    }
  }

  WithReviewForm.propTypes = {};

  return WithReviewForm;
};

export default withReviewForm;
