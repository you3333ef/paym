import React, { ReactNode } from 'react';
import { useTheme } from '@/themes/ThemeContext';

interface PaymentCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
  noPadding?: boolean;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  headerAction,
  noPadding = false,
}) => {
  const { theme } = useTheme();

  if (!theme) return null;

  const cardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: noPadding ? 0 : theme.spacing.xl,
    boxShadow: theme.style.shadow === 'light'
      ? '0 2px 8px rgba(0,0,0,0.08)'
      : theme.style.shadow === 'medium'
      ? '0 4px 16px rgba(0,0,0,0.12)'
      : theme.style.shadow === 'strong'
      ? '0 8px 24px rgba(0,0,0,0.16)'
      : 'none',
    border: `1px solid ${theme.colors.border}`,
    transition: 'all 0.3s ease',
  };

  const headerStyles: React.CSSProperties = {
    borderBottom: noPadding ? 'none' : `1px solid ${theme.colors.border}`,
    paddingBottom: noPadding ? 0 : theme.spacing.md,
    marginBottom: noPadding ? 0 : theme.spacing.lg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const titleStyles: React.CSSProperties = {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semibold,
    margin: 0,
  };

  const subtitleStyles: React.CSSProperties = {
    color: theme.colors.textSecondary || theme.colors.text,
    fontSize: theme.fonts.sizes.sm,
    marginTop: theme.spacing.xs,
  };

  return (
    <div
      className={`payment-card ${className}`}
      style={cardStyles}
    >
      {/* Card Header */}
      {(title || subtitle || headerAction) && (
        <div className="payment-card__header" style={headerStyles}>
          <div>
            {title && (
              <h2 className="payment-card__title" style={titleStyles}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="payment-card__subtitle" style={subtitleStyles}>
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && (
            <div className="payment-card__header-action">
              {headerAction}
            </div>
          )}
        </div>
      )}

      {/* Card Body */}
      <div className="payment-card__body">
        {children}
      </div>
    </div>
  );
};

export default PaymentCard;
