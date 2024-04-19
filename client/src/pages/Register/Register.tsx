import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginSchema } from '../../schemas';
import { registerUser } from '../../services/auth';
import { setUser } from '../../store/reducers/userSlice';

export const Register: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });

  const [submitting, setSubmitting] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    setSubmitting(true);
    try {
      const credentials = await registerUser(data);
      dispatch(setUser(credentials));
      history('/');
    } catch (e) {
      const errorText = e instanceof Error ? e.message : 'Something went wrong';
      setButtonDisabled(false);
      toast.error(errorText, {
        toastId: 'toast',
        className: 'toast-error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main login">
      <div className="login__picture"></div>
      <div className="login__content">
        <div className="login__container">
          <h2 className="h2">Register</h2>
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
                  autoComplete="new-password"
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
            <br />
            <br />
            <div>
              <button
                className={
                  submitting
                    ? 'button button_login button_loading'
                    : 'button button_login'
                }
                disabled={!isValid || submitting || buttonDisabled}
                type="submit"
                role="submit"
              >
                <span>Sign Up</span>
              </button>
            </div>

            <div className="login__register">
              Already have an account? &nbsp;
              <Link className="link" to="/login">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
