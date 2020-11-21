import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendReview} from "../../store/api-actions";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import StarControl from "../star-control/star-control";
import {RATING_GRADES, RATING_TITLES, MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH} from "../../const";

const OfferReviewForm = React.forwardRef((props, ref) => {
  const {handleSubmit, handleFieldChange, handleRatingChange, isDisabled, stars} = props;

  const {commentRef} = ref;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" required>
        <StarControl
          grades = {RATING_GRADES}
          handleRatingChange = {handleRatingChange}
          stars = {stars}
          titles = {RATING_TITLES}
        />
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        minLength={MIN_REVIEW_LENGTH}
        maxLength={MAX_REVIEW_LENGTH}
        ref={commentRef}
        required
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled} onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );

});

export {OfferReviewForm};

OfferReviewForm.displayName = `OfferReviewForm`;

OfferReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  stars: PropTypes.number,
};

const mapStateToProps = ({STATE}) => ({
  id: STATE.currentOffer.id,
});

const mapDispatchToProps = (dispatch) => ({
  sendReview(authData) {
    dispatch(sendReview(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withReviewForm(OfferReviewForm));
