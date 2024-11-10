import styles from './AuthPage.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { API_HOST } from '../../helpers/API';
import { AuthResponse } from '../../interfaces/auth.interface';

export interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

function LoginPage() {
  const [requestError, setRequestError] = useState<string | null>();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setRequestError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthResponse>(
        `${API_HOST}/auth/login`,
        {
          email,
          password
        }
      );

      console.log(data);
      localStorage.setItem('jwt', data.access_token);
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err.message);
        setRequestError(err.response?.data.message);
      }
    }
  };

  return (
    <div className={styles['auth-page']}>
      <Headling className={styles['auth-page__title']}>Вход</Headling>
      {requestError && (
        <div className={styles['auth-page__request-error']}>{requestError}</div>
      )}
      <form onSubmit={handleSubmit} className={styles['auth-page__form']}>
        <div className={styles['auth-page__fields']}>
          <InputWithLabel
            label="Ваш email"
            placeholder="Email"
            name="email"
            id="email"
            className={styles['auth-page__field']}
          />
          <InputWithLabel
            label="Ваш пароль"
            placeholder="Пароль"
            type="password"
            name="password"
            id="password"
            className={styles['auth-page__field']}
          />
        </div>
        <Button size="large" className={styles['auth-page__send-btn']}>
          Вход
        </Button>
      </form>
      <div className={cn(styles['auth-page__tip'], styles['tip'])}>
        <p className={styles['tip__label']}>Нет аккаунта?</p>
        <Link to={'/auth/register'} className={styles['tip__link']}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
