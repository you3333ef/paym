import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/themes/ThemeContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PaymentHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
  logoPosition?: 'left' | 'center' | 'right';
}

export const PaymentHeader: React.FC<PaymentHeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackClick,
  className = '',
  logoPosition = 'left'
}) => {
  const { theme, companyId } = useTheme();
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  if (!theme) return null;

  const logoUrl = theme.logo;
  const headerStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderBottomColor: theme.colors.border,
  };

  const titleStyles: React.CSSProperties = {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.lg,
    fontWeight: theme.fonts.weights.semibold,
  };

  const subtitleStyles: React.CSSProperties = {
    color: theme.colors.textSecondary || theme.colors.text,
    fontSize: theme.fonts.sizes.sm,
  };

  const getLogoPosition = () => {
    switch (logoPosition) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  };

  return (
    <header
      className={`payment-header ${className}`}
      style={headerStyles}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.md,
        width: '100%',
      }}>
        {/* Back Button */}
        {showBackButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            style={{
              color: theme.colors.text,
              borderRadius: theme.borderRadius.sm,
            }}
            aria-label="العودة"
          >
            <ArrowLeft size={20} />
          </Button>
        )}

        {/* Logo */}
        {logoUrl && (
          <div style={{
            display: 'flex',
            justifyContent: getLogoPosition(),
            alignItems: 'center',
            flex: logoPosition === 'center' ? 1 : 'auto',
          }}>
            <img
              src={logoUrl}
              alt={`${theme.nameAr} ${theme.name}`}
              className="payment-header__logo"
              style={{
                maxHeight: '48px',
                width: 'auto',
              }}
            />
          </div>
        )}

        {/* Title and Subtitle */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.xs,
          flex: logoPosition === 'center' ? 1 : 'auto',
        }}>
          <h1 className="payment-header__title" style={titleStyles}>
            {title}
          </h1>
          {subtitle && (
            <p style={subtitleStyles}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Company Badge */}
        {companyId && (
          <div style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span
              style={{
                fontSize: theme.fonts.sizes.xs,
                fontWeight: theme.fonts.weights.medium,
                color: theme.colors.textSecondary || theme.colors.text,
                backgroundColor: theme.colors.background,
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                borderRadius: theme.borderRadius.full,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              {theme.nameAr}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default PaymentHeader;
