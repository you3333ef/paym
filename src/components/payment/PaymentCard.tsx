import React, { ReactNode } from 'react';
import { Shield } from 'lucide-react';
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
    backgroundColor: '#FFFFFF',
    borderRadius: '0.75rem',
    padding: noPadding ? 0 : '1.5rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    border: '1px solid #E5E7EB',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '400px',
  };

  const headerStyles: React.CSSProperties = {
    borderBottom: noPadding ? 'none' : '1px solid #E5E7EB',
    paddingBottom: noPadding ? 0 : '1rem',
    marginBottom: noPadding ? 0 : '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const titleStyles: React.CSSProperties = {
    color: '#1F2937',
    fontSize: '1.125rem',
    fontWeight: '600',
    margin: 0,
  };

  const subtitleStyles: React.CSSProperties = {
    color: '#6B7280',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  };

  const footerStyles: React.CSSProperties = {
    marginTop: 'auto',
    paddingTop: '1.5rem',
    borderTop: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
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

      {/* SSL Badge Footer */}
      <div className="payment-card__footer" style={footerStyles}>
        <Shield size={16} color="#10B981" />
        <span style={{ color: '#10B981', fontSize: '0.875rem', fontWeight: '500' }}>
          SSL 256-bit Secure
        </span>
      </div>
    </div>
  );
};

export default PaymentCard;
