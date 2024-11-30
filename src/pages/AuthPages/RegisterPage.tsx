import styles from './AuthPage.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import { FormEvent, useEffect } from 'react';
import { register } from '../../store/user/user.thunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectUserState } from '../../store/user/user.selectors';

export interface RegisterForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
}

function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jwt, registerErrorMessage } = useAppSelector(selectUserState);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;

    sendRegister(email.value, password.value, name.value);
  };

  const sendRegister = async (
    email: string,
    password: string,
    name: string
  ) => {
    dispatch(register({ email, password, name }));
  };

  return (
    <div className={styles['auth-page']}>
      <Headling className={styles['auth-page__title']}>Регистрация</Headling>
      {registerErrorMessage && (
        <div className={styles['auth-page__request-error']}>
          {registerErrorMessage}
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
          <InputWithLabel
            label="Ваше имя"
            placeholder="Имя"
            name="name"
            id="name"
            className={styles['auth-page__field']}
          />
        </div>
        <Button size="large" className={styles['auth-page__send-btn']}>
          Зарегистрироваться
        </Button>
      </form>
      <div className={cn(styles['auth-page__tip'], styles['tip'])}>
        <p className={styles['tip__label']}>Есть аккаунт?</p>
        <Link to={'/auth/login'} className={styles['tip__link']}>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
