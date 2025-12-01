import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '@/themes/ThemeContext';

interface PaymentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const { theme } = useTheme();

  if (!theme) return null;

  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      fontFamily: theme.fonts.family,
      fontWeight: theme.fonts.weights.medium,
      padding: size === 'sm'
        ? `${theme.spacing.xs} ${theme.spacing.md}`
        : size === 'lg'
        ? `${theme.spacing.md} ${theme.spacing.xl}`
        : `${theme.spacing.sm} ${theme.spacing.lg}`,
      borderRadius: theme.style.buttonShape === 'rounded'
        ? theme.borderRadius.md
        : theme.style.buttonShape === 'pill'
        ? theme.borderRadius.full
        : theme.borderRadius.none,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.sm,
      minHeight: size === 'sm' ? '36px' : size === 'lg' ? '52px' : '44px',
      width: fullWidth ? '100%' : 'auto',
      fontSize: size === 'sm'
        ? theme.fonts.sizes.sm
        : size === 'lg'
        ? theme.fonts.sizes.lg
        : theme.fonts.sizes.base,
    };

    // Color variants
    if (variant === 'primary') {
      return {
        ...baseStyles,
        backgroundColor: disabled || loading
          ? `${theme.colors.button}80`
          : theme.colors.button,
        color: theme.colors.buttonText,
        border: 'none',
      };
    } else if (variant === 'secondary') {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
      };
    } else {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `1px solid ${theme.colors.primary}`,
      };
    }
  };

  const getHoverStyles = (): React.CSSProperties => {
    if (disabled || loading) return {};

    if (variant === 'primary') {
      return {
        backgroundColor: theme.colors.buttonHover,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      };
    } else if (variant === 'secondary') {
      return {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.text,
      };
    } else {
      return {
        backgroundColor: `${theme.colors.primary}10`,
      };
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      className={`payment-button payment-button--${variant} payment-button--${size} ${className}`}
      style={{
        ...getButtonStyles(),
        ...(isHovered ? getHoverStyles() : {}),
        opacity: disabled || loading ? 0.6 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 size={20} className="animate-spin" />}
      {!loading && icon && icon}
      <span>{children}</span>
    </button>
  );
};

export default PaymentButton;
