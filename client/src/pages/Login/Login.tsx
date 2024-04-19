import React from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <main className="main login">
      <div className="login__picture"></div>
      <div className="login__content">
        <div className="login__container">
          <h2 className="h2">Login</h2>
          <form className="login__form">
            <div className="input__group">
              <label className="input__label" htmlFor="email">
                Email
              </label>
              <div className="input__container">
                <input
                  className="input__field"
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  defaultValue=""
                />
              </div>
              {/*error && (
        <div className="input-error-message">{error.message}</div>
      )*/}
            </div>
            <div className="input__group">
              <label className="input__label" htmlFor="password">
                Password
              </label>
              <div className="input__container">
                <input
                  className="input__field"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  defaultValue=""
                />
              </div>
              {/*error && (
    <div className="input-error-message">{error.message}</div>
  )*/}
            </div>
            <div className="login__forgot">
              <Link className="link" to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <div>
              <button className="button button_login">Sign In</button>
            </div>

            <div className="login__register">
              Don&apos;t have account? &nbsp;
              <Link className="link" to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
