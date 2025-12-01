import React from 'react';
import { useTheme } from '@/themes/ThemeContext';
import { Check } from 'lucide-react';

interface ProgressStep {
  id: string;
  label: string;
  description?: string;
}

interface PaymentProgressProps {
  steps: ProgressStep[];
  currentStepIndex: number;
  className?: string;
}

export const PaymentProgress: React.FC<PaymentProgressProps> = ({
  steps,
  currentStepIndex,
  className = '',
}) => {
  const { theme } = useTheme();

  if (!theme) return null;

  const progressStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
    position: 'relative',
  };

  const connectorLineStyles: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: theme.colors.border,
    zIndex: 0,
    transform: 'translateY(-50%)',
  };

  const stepStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `2px solid ${theme.colors.border}`,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.textSecondary || theme.colors.text,
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.3s ease',
  };

  const activeStepStyles: React.CSSProperties = {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    color: theme.colors.buttonText,
    transform: 'scale(1.1)',
  };

  const completedStepStyles: React.CSSProperties = {
    borderColor: theme.colors.success || '#28A745',
    backgroundColor: theme.colors.success || '#28A745',
    color: theme.colors.buttonText,
  };

  const labelStyles: React.CSSProperties = {
    fontSize: theme.fonts.sizes.sm,
    fontWeight: theme.fonts.weights.medium,
    marginTop: theme.spacing.sm,
    textAlign: 'center' as const,
    color: theme.colors.textSecondary || theme.colors.text,
    maxWidth: '100px',
  };

  const activeLabelStyles: React.CSSProperties = {
    color: theme.colors.text,
    fontWeight: theme.fonts.weights.semibold,
  };

  return (
    <div className={`payment-progress ${className}`}>
      {/* Connector Line - Rendered using pseudo-element via CSS */}
      <div style={connectorLineStyles} />

      {/* Steps */}
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;

        const currentStepStyles: React.CSSProperties = {
          ...stepStyles,
          ...(isActive ? activeStepStyles : {}),
          ...(isCompleted ? completedStepStyles : {}),
        };

        const currentLabelStyles: React.CSSProperties = {
          ...labelStyles,
          ...(isActive ? activeLabelStyles : {}),
        };

        return (
          <div
            key={step.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
            }}
          >
            {/* Step Circle */}
            <div
              className={`payment-progress__step ${isActive ? 'payment-progress__step--active' : ''} ${isCompleted ? 'payment-progress__step--completed' : ''}`}
              style={currentStepStyles}
            >
              {isCompleted ? (
                <Check size={20} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Step Label */}
            <div
              className={`payment-progress__label ${isActive ? 'payment-progress__label--active' : ''}`}
              style={currentLabelStyles}
            >
              {step.label}
            </div>

            {/* Step Description (if active) */}
            {isActive && step.description && (
              <div
                style={{
                  fontSize: theme.fonts.sizes.xs,
                  color: theme.colors.textSecondary || theme.colors.text,
                  marginTop: theme.spacing.xs,
                  textAlign: 'center' as const,
                  maxWidth: '120px',
                }}
              >
                {step.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PaymentProgress;
