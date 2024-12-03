import styles from './Heading.module.scss';
import cn from 'classnames';
import { HeadingProps } from './Heading.props';

function Heading({ className, children, ...props }: HeadingProps) {
  return (
    <h1 className={cn(styles['heading'], className)} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
