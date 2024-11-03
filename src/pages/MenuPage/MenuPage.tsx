import styles from './MenuPage.module.scss';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';

function MenuPage() {
  return (
    <>
      <div className={styles['header']}>
        <Headling className={styles['header__search']}>Меню</Headling>
        <Search />
      </div>
      <main className={styles['main']}></main>
    </>
  );
}

export default MenuPage;
