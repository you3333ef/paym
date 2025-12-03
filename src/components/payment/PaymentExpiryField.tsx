import React from 'react';
import { useTheme } from '@/themes/ThemeContext';

interface PaymentExpiryFieldProps {
  label: string;
  error?: string;
  monthValue: string;
  yearValue: string;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
  helpText?: string;
}

export const PaymentExpiryField: React.FC<PaymentExpiryFieldProps> = ({
  label,
  error,
  monthValue,
  yearValue,
  onMonthChange,
  onYearChange,
  helpText,
}) => {
  const { theme } = useTheme();

  if (!theme) return null;

  const containerStyles: React.CSSProperties = {
    marginBottom: '1rem',
    width: '100%',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: error ? theme.colors.error : '#374151',
    marginBottom: '0.5rem',
  };

  const selectWrapperStyles: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
  };

  const selectStyles: React.CSSProperties = {
    flex: 1,
    fontFamily: "'Inter', 'system-ui', sans-serif",
    fontSize: '1rem',
    padding: '0.75rem 1rem',
    height: '3rem',
    border: `1px solid ${error ? theme.colors.error : '#D1D5DB'}`,
    borderRadius: '0.375rem',
    backgroundColor: '#FFFFFF',
    color: '#1F2937',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const helpTextStyles: React.CSSProperties = {
    fontSize: '0.75rem',
    color: error ? theme.colors.error : '#6B7280',
    marginTop: '0.5rem',
  };

  // Generate month options
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      value: month.toString().padStart(2, '0'),
      label: month.toString().padStart(2, '0'),
    };
  });

  // Generate year options (current year + 20 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear + i);

  return (
    <div className="payment-form__field payment-form__field--expiry" style={containerStyles}>
      <label className="payment-form__label" style={labelStyles}>
        {label}
      </label>

      <div className="payment-form__expiry-selects" style={selectWrapperStyles}>
        <select
          className="payment-form__select payment-form__select--month"
          style={selectStyles}
          value={monthValue}
          onChange={(e) => onMonthChange(e.target.value)}
        >
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>

        <select
          className="payment-form__select payment-form__select--year"
          style={selectStyles}
          value={yearValue}
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="payment-form__error" style={helpTextStyles}>
          {error}
        </p>
      )}

      {!error && helpText && (
        <p className="payment-form__help-text" style={helpTextStyles}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default PaymentExpiryField;
