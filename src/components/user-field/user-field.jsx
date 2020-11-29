import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";

const UserField = ({authorizationStatus, currentEmail, onEmailClick, getFavorites}) => {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <span className="header__login" onClick={onEmailClick}>Sign in</span> :
        <span className="header__user-name user__name" onClick={() => {
          onEmailClick();
          getFavorites();
        }}>{currentEmail}</span>}
    </a>
  );
};

UserField.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentEmail: PropTypes.string,
  onEmailClick: PropTypes.func,
  getFavorites: PropTypes.func,
};

export default React.memo(UserField);
