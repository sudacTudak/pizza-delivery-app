import styles from './Loader.module.scss';
import cn from 'classnames';
import { LoaderProps } from './Loader.props';

function Loader({ className }: LoaderProps) {
  return (
    <div className={cn(styles['loader'], className)}>
      <div className={styles['loader__circle']} />
    </div>
  );
}

export default Loader;
