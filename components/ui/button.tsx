// components/ui/button.tsx
'use client';

import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
  size?: 'icon' | 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({ children, variant, size, className = '', ...props }) => {
  // Basic Tailwind styles for example
  let baseStyles = 'rounded px-4 py-2 font-medium transition';
  
  if (variant === 'outline') {
    baseStyles += ' border border-gray-300 text-gray-700 hover:bg-gray-100';
  } else {
    baseStyles += ' bg-blue-500 text-white hover:bg-blue-600';
  }

  if (size === 'icon') {
    baseStyles += ' p-2';
  } else if (size === 'sm') {
    baseStyles += ' text-sm';
  } else if (size === 'lg') {
    baseStyles += ' text-lg';
  }

  return (
    <button {...props} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
};

export { Button };
