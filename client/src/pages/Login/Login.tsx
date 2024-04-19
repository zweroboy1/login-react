import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import { loginSchema } from '../../schemas';
import { loginUser } from '../../services/auth';
import { setUser } from '../../store/reducers/userSlice';

export const Login: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });

  const [submiting, setSubmiting] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    setSubmiting(true);
    try {
      const credentials = await loginUser(data);
      dispatch(setUser(credentials));
      console.log(credentials);
      history('/');
    } catch (e) {
      const errorText = e instanceof Error ? e.message : null;
      console.log(errorText);
      setButtonDisabled(false);
      /*
      toast.error(toastText, {
        toastId: 'toast',
        className: 'toast-error',
      });*/
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <main className="main login">
      <div className="login__picture"></div>
      <div className="login__content">
        <div className="login__container">
          <h2 className="h2">Login</h2>
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('email')}
                />
                {errors.email && (
                  <div className="input__error-message">
                    {errors.email.message}
                  </div>
                )}
              </div>
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
                  {...register('password')}
                />
                {errors.password && (
                  <div className="input__error-message">
                    {errors.password.message}
                  </div>
                )}
              </div>
            </div>
            <div className="login__forgot">
              <Link className="link" to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                className={
                  submiting
                    ? 'button button_login button_loading'
                    : 'button button_login'
                }
                disabled={!isValid || submiting || buttonDisabled}
                type="submit"
                role="submit"
              >
                <span>Sign In</span>
              </button>
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
