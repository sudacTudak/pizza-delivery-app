import styles from './Headling.module.scss';
import cn from 'classnames';
import { HeadlingProps } from './Headling.props';

function Headling({ className, children, ...props }: HeadlingProps) {
  return (
    <h1 className={cn(styles['headling'], className)} {...props}>
      {children}
    </h1>
  );
}

export default Headling;
