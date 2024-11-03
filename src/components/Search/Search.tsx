import styles from './Search.module.scss';
import cn from 'classnames';
import { SearchProps } from './Search.props';
import { forwardRef, useState } from 'react';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { className, placeholder, ...props }: SearchProps,
  ref
) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={cn(
        styles['search'],
        {
          [styles['search_focused']]: isFocused
        },
        className
      )}
    >
      <img
        className={styles['search__icon']}
        src="/search-icon.svg"
        alt="Иконка поиска"
      />
      <input
        ref={ref}
        className={styles['search__input']}
        placeholder={placeholder ?? 'Введите блюдо или состав'}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
      />
    </div>
  );
});

export default Search;
