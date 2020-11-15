import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {changeUser} from "../../store/action";
import UserField from "../../components/user-field/user-field";


class LoginScreen extends PureComponent {
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
    const {city, onLogoClick, authorizationStatus, currentUser} = this.props;

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a
                  className="header__logo-link"
                  href="#"
                  onClick={onLogoClick}
                >
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <UserField
                      authorizationStatus = {authorizationStatus}
                      currentUser = {currentUser}
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={this.loginRef}
                    required=""
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={this.passwordRef}
                    required=""/>
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                    Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export {LoginScreen};

const mapStateToProps = ({DATA, USER}) => ({
  city: DATA.city,
  authorizationStatus: USER.authorizationStatus,
  currentUser: USER.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
    dispatch(changeUser(authData.login));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
