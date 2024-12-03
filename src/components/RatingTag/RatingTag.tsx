import styles from './RatingTag.module.scss';
import cn from 'classnames';
import { RatingTagProps } from './RatingTag.props';

function RatingTag({ rating, className }: RatingTagProps) {
  return (
    <div className={cn(styles['rating-tag'], className)}>
      <span className={styles['rating-tag__value']}>{rating}</span>
      <img className={styles['rating-tag__rating-icon']} src="/star.svg" />
    </div>
  );
}

export default RatingTag;
