import React, { InputHTMLAttributes, ReactNode } from 'react';
import { useTheme } from '@/themes/ThemeContext';

interface PaymentFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'flat';
}

export const PaymentFormField: React.FC<PaymentFormFieldProps> = ({
  label,
  error,
  helpText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  variant = 'outlined',
  className = '',
  style,
  ...props
}) => {
  const { theme } = useTheme();

  if (!theme) return null;

  const containerStyles: React.CSSProperties = {
    marginBottom: theme.spacing.md,
    width: fullWidth ? '100%' : 'auto',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: theme.fonts.sizes.sm,
    fontWeight: theme.fonts.weights.medium,
    color: error ? theme.colors.error : theme.colors.text,
    marginBottom: theme.spacing.xs,
  };

  const inputWrapperStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    fontFamily: "'Inter', 'system-ui', sans-serif",
    fontSize: '1rem',
    padding: '0.75rem 1rem',
    height: '3rem',
    border: '1px solid #D1D5DB',
    borderRadius: '0.375rem',
    backgroundColor: '#FFFFFF',
    color: '#1F2937',
    transition: 'all 0.3s ease',
    paddingLeft: leftIcon ? '2.5rem' : '1rem',
    paddingRight: rightIcon ? '2.5rem' : '1rem',
  };

  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    color: error ? theme.colors.error : '#9CA3AF',
    pointerEvents: 'none',
  };

  const leftIconStyles: React.CSSProperties = {
    ...iconStyles,
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const rightIconStyles: React.CSSProperties = {
    ...iconStyles,
    right: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const helpTextStyles: React.CSSProperties = {
    fontSize: theme.fonts.sizes.xs,
    color: error ? theme.colors.error : theme.colors.textSecondary || theme.colors.text,
    marginTop: theme.spacing.xs,
  };

  const focusStyles: React.CSSProperties = {
    outline: 'none',
    borderColor: error ? theme.colors.error : theme.colors.primary,
    boxShadow: `0 0 0 3px ${theme.colors.primary}20`,
  };

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={`payment-form__field payment-form__field--${variant} ${className}`}
      style={containerStyles}
    >
      {/* Label */}
      <label className="payment-form__label" style={labelStyles}>
        {label}
      </label>

      {/* Input Wrapper */}
      <div className="payment-form__input-wrapper" style={inputWrapperStyles}>
        {/* Left Icon */}
        {leftIcon && (
          <div style={leftIconStyles}>
            {leftIcon}
          </div>
        )}

        {/* Input */}
        <input
          className="payment-form__input"
          style={{
            ...inputStyles,
            ...(isFocused ? focusStyles : {}),
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div style={rightIconStyles}>
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="payment-form__error" style={helpTextStyles}>
          {error}
        </p>
      )}

      {/* Help Text */}
      {!error && helpText && (
        <p className="payment-form__help-text" style={helpTextStyles}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default PaymentFormField;
