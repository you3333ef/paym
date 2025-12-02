import React, { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@/themes/ThemeContext';
import { useLink } from '@/hooks/useSupabase';

interface PaymentThemeWrapperProps {
  children: ReactNode;
  defaultCompany?: string;
}

export const PaymentThemeWrapper: React.FC<PaymentThemeWrapperProps> = ({
  children,
  defaultCompany = 'aramex'
}) => {
  const { id } = useParams();
  const { data: linkData } = useLink(id);

  // Get company from URL params or link data
  const urlParams = new URLSearchParams(window.location.search);
  const companyFromUrl = urlParams.get('company');
  const serviceKey = linkData?.payload?.service_key || companyFromUrl || defaultCompany;

  return (
    <ThemeProvider companyId={serviceKey}>
      {children}
    </ThemeProvider>
  );
};

export default PaymentThemeWrapper;
