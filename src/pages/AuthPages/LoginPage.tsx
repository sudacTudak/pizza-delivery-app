import styles from './AuthPage.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import { FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectUserState } from '../../store/user/user.selectors';
import { login } from '../../store/user/user.thunks';

export interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { jwt, loginErrorMessage } = useAppSelector(selectUserState);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    sendLogin(email.value, password.value);
  };

  const sendLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles['auth-page']}>
      <Headling className={styles['auth-page__title']}>Вход</Headling>
      {loginErrorMessage && (
        <div className={styles['auth-page__request-error']}>
          {loginErrorMessage}
        </div>
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
