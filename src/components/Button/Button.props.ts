import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: 'small' | 'large';
  iconSrc?: string;
  iconAlt?: string;
}
