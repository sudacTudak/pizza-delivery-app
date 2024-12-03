import styles from './SuccessOrderPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function SuccessOrderPage() {
  const navigate = useNavigate();
  const handleNewOrderBtnClick = () => {
    navigate('/');
  };
  return (
    <div className={styles['success-page']}>
      <div className={styles['success-page__container']}>
        <div className={styles['success-page__image']}>
          <img src="/pizza-sliced.png" />
        </div>
        <div className={styles['success-page__text']}>
          Ваш заказ успешно оформлен!
        </div>
        <div className={styles['success-page__footer']}>
          <Button size="large" onClick={handleNewOrderBtnClick}>
            Сделать новый
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessOrderPage;
