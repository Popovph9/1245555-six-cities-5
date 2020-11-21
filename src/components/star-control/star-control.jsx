import React from "react";
import PropTypes, {string} from "prop-types";

const StarControl = ({grades, handleRatingChange, stars, titles}) => {
  return (
    <React.Fragment>
      {grades.map((grade, i) => (
        <React.Fragment key={`${i}`}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={`${grade}`}
            id={`${grade}-stars`}
            type="radio"
            onChange={handleRatingChange}
            checked={Number(grade) === stars}
          />
          <label
            key={`${i}`}
            htmlFor={`${grade}-stars`}
            className="reviews__rating-label form__rating-label"
            title={titles[i]}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

StarControl.propTypes = {
  grades: PropTypes.array.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  stars: PropTypes.number,
  titles: PropTypes.arrayOf(string),
};

export default StarControl;
