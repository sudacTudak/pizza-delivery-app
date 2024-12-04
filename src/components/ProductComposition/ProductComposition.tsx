import styles from './ProductComposition.module.scss';
import cn from 'classnames';
import { ProductCompositionProps } from './ProductComposition.props';

function ProductComposition({
  ingredients,
  className
}: ProductCompositionProps) {
  return (
    <div className={cn(styles['composition'], className)}>
      <p className={styles['composition__title']}>Состав:</p>
      <ul className={styles['composition__list']}>
        {ingredients.map((ing) => (
          <li key={ing} className={styles['composition__item']}>
            {ing}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductComposition;
