import { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
  appearance?: 'outlined' | 'filled' | 'text';
  iconSrc: string;
  iconAlt?: string;
}
