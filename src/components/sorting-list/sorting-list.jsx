import React from "react";
import PropTypes from "prop-types";

const OPEN_CLASSNAME = `places__options--opened`;

const SortingList = (props) => {
  const {currentSorting, changeSorting, sortOffers} = props;

  const sortingRef = React.createRef();

  const onArrowClick = () => {
    sortingRef.current.classList.toggle(OPEN_CLASSNAME);
  };

  const onOptionClick = (evt) => {
    changeSorting(evt);
    sortOffers(evt);
    onArrowClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex="0" onClick={onArrowClick}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul ref={sortingRef} className="places__options places__options--custom ">
        <li className="places__option places__option--active" tabIndex="0" onClick={onOptionClick}>Popular</li>
        <li className="places__option" tabIndex="0" onClick={onOptionClick}>Price: low to high</li>
        <li className="places__option" tabIndex="0" onClick={onOptionClick}>Price: high to low</li>
        <li className="places__option" tabIndex="0" onClick={onOptionClick}>Top rated first</li>
      </ul>

      {/* <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" defaultValue="">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
          </select>*/}
    </form>
  );
};

SortingList.propTypes = {
  currentSorting: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
};

export default SortingList;
