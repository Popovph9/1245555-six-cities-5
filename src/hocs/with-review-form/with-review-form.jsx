import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        grade: null,
        date: ``,
        text: ``,
        isDisabled: true,
      };

      this.commentRef = createRef();
      this.ratingRef = createRef();

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
      const {sendReview, id} = this.props;

      evt.preventDefault();

      sendReview({
        id,
        comment: this.state.text,
        rating: this.state.grade,
      });

      this.commentRef.current.setAttribute(`disabled`, `disabled`);
      Promise.all([
        sendReview({
          id,
          comment: this.state.text,
          rating: this.state.grade,
        }),
      ]).then(() => {
        this.commentRef.current.value = ``;
        this.commentRef.current.removeAttribute(`disabled`, `disabled`);
      });
    }

    disableButton() {
      if (this.state.text.length >= this.commentRef.current.minLength && this.state.text.length <= this.commentRef.current.maxLength && this.state.grade !== null) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    }

    componentDidUpdate() {
      this.disableButton();
    }

    render() {
      return (
        <Component
          handleSubmit = {this.handleSubmit}
          handleFieldChange = {this.handleFieldChange}
          handleRatingChange = {this.handleRatingChange}
          isDisabled = {this.state.isDisabled}
          stars = {this.state.grade}
          ref={{
            commentRef: this.commentRef,
            ratingRef: this.ratingRef
          }}
          {...this.props}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    sendReview: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  return WithReviewForm;
};

export default withReviewForm;
