import React from 'react';

// Define an interface for the props of the CTAButton component
interface CTAButtonProps {
  children: React.ReactNode; // Can be any valid React child (string, element, array, etc.)
  href?: string; // Optional href for anchor tag
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void; // Optional click handler
  variant?: 'primary' | 'secondary'; // Define specific string literal types for variant
  className?: string; // Optional className for additional styling
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  const baseClasses = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm";
  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl"
    : "bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50 hover:shadow-lg";

  // Use a type assertion for the 'Component' type to ensure type safety
  const Component = href ? 'a' : 'button';

  return (
    <Component
      // Cast props based on the component type to satisfy TypeScript
      {...(href ? { href } : {})}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Component>
  );
};