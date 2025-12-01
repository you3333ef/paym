// ===== نظام إدارة ثيمات الشركات الرسمية =====
// Theme Management System for Shipping Companies

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent?: string;
  background: string;
  surface: string;
  text: string;
  textSecondary?: string;
  border: string;
  button: string;
  buttonHover: string;
  buttonText: string;
  inputBg: string;
  inputBorder: string;
  success?: string;
  warning?: string;
  error?: string;
}

export interface ThemeFonts {
  family: string;
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  weights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface CompanyTheme {
  id: string;
  name: string;
  nameAr: string;
  country: string;
  logo: string;
  logoDark?: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  style: {
    buttonShape: 'rounded' | 'rect' | 'pill';
    formField: 'flat' | 'outlined' | 'filled';
    shadow: 'none' | 'light' | 'medium' | 'strong';
    hasGradient: boolean;
    gradientDirection?: 'horizontal' | 'vertical' | 'diagonal';
  };
  responsive: {
    mobileBreakpoint: string;
    tabletBreakpoint: string;
  };
  localization: {
    rtl: boolean;
    language: 'ar' | 'en' | 'both';
  };
}

// ===== ثيمات جميع شركات الشحن =====
export const SHIPPING_COMPANY_THEMES: Record<string, CompanyTheme> = {
  // ===== الإمارات العربية المتحدة =====
  aramex: {
    id: 'aramex',
    name: 'Aramex',
    nameAr: 'أرامكس',
    country: 'UAE',
    logo: '/logos/aramex-logo.svg',
    logoDark: '/logos/aramex-logo-dark.svg',
    colors: {
      primary: '#D22128', // الأحمر الرسمي
      secondary: '#313131', // الرصاصي الداكن
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#212529',
      textSecondary: '#6C757D',
      border: '#DEE2E6',
      button: '#D22128',
      buttonHover: '#B81D21',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CED4DA',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Tajawal', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  dhl: {
    id: 'dhl',
    name: 'DHL',
    nameAr: 'دي إتش إل',
    country: 'UAE',
    logo: '/logos/dhl-logo.svg',
    logoDark: '/logos/dhl-logo-dark.svg',
    colors: {
      primary: '#FFCC00', // الأصفر الذهبي
      secondary: '#D40511', // الأحمر DHL
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#000000',
      textSecondary: '#666666',
      border: '#E0E0E0',
      button: '#D40511',
      buttonHover: '#B3030D',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00752E',
      warning: '#FFA500',
      error: '#E60012'
    },
    fonts: {
      family: "'DHL', 'Inter', 'Roboto', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '40px',
      xxl: '56px'
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      full: '0px'
    },
    style: {
      buttonShape: 'rect',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  fedex: {
    id: 'fedex',
    name: 'FedEx',
    nameAr: 'فيديكس',
    country: 'UAE',
    logo: '/logos/fedex-logo.svg',
    logoDark: '/logos/fedex-logo-dark.svg',
    colors: {
      primary: '#4D148C', // البنفسجي
      secondary: '#FF6600', // البرتقالي
      accent: '#FFFFFF',
      background: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#2C2C2C',
      textSecondary: '#707070',
      border: '#E0E0E0',
      button: '#4D148C',
      buttonHover: '#3E0F6B',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB81C',
      error: '#E4002B'
    },
    fonts: {
      family: "'FedEx', 'Inter', 'sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '4px',
      lg: '6px',
      full: '50px'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  ups: {
    id: 'ups',
    name: 'UPS',
    nameAr: 'يو بي إس',
    country: 'UAE',
    logo: '/logos/ups-logo.svg',
    logoDark: '/logos/ups-logo-dark.svg',
    colors: {
      primary: '#351C15', // البني الداكن
      secondary: '#FFB500', // الأصفر
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F8F8F8',
      text: '#1A1A1A',
      textSecondary: '#666666',
      border: '#DDDDDD',
      button: '#351C15',
      buttonHover: '#2A1510',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A350',
      warning: '#FFB500',
      error: '#E31837'
    },
    fonts: {
      family: "'UPS', 'Arial', 'Helvetica', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      full: '4px'
    },
    style: {
      buttonShape: 'rect',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  empost: {
    id: 'empost',
    name: 'Emirates Post',
    nameAr: 'بريد الإمارات',
    country: 'UAE',
    logo: '/logos/empost-logo.svg',
    logoDark: '/logos/empost-logo-dark.svg',
    colors: {
      primary: '#C8102E', // الأحمر
      secondary: '#003087', // الأزرق
      accent: '#FFFFFF',
      background: '#F5F7FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#C8102E',
      buttonHover: '#A80D26',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#DC3545'
    },
    fonts: {
      family: "'Emirates Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: true,
      gradientDirection: 'horizontal'
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== المملكة العربية السعودية =====
  smsa: {
    id: 'smsa',
    name: 'SMSA Express',
    nameAr: 'شركة سمسا اكسبريس',
    country: 'SA',
    logo: '/logos/smsa-logo.svg',
    logoDark: '/logos/smsa-logo-dark.svg',
    colors: {
      primary: '#0066CC', // الأزرق
      secondary: '#FF6600', // البرتقالي
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#0066CC',
      buttonHover: '#0052A3',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Cairo', 'Tajawal', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  zajil: {
    id: 'zajil',
    name: 'Zajil',
    nameAr: 'زاجل',
    country: 'SA',
    logo: '/logos/zajil-logo.svg',
    logoDark: '/logos/zajil-logo-dark.svg',
    colors: {
      primary: '#1C4587', // الأزرق الداكن
      secondary: '#FF9900', // البرتقالي
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#1C4587',
      buttonHover: '#153764',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#E4002B'
    },
    fonts: {
      family: "'Zajil', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  naqel: {
    id: 'naqel',
    name: 'Naqel Express',
    nameAr: 'شركة ناقل إكسبرس',
    country: 'SA',
    logo: '/logos/naqel-logo.svg',
    logoDark: '/logos/naqel-logo-dark.svg',
    colors: {
      primary: '#0052A3', // الأزرق
      secondary: '#FF6B00', // البرتقالي
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#0052A3',
      buttonHover: '#004082',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Naqel', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  saudipost: {
    id: 'saudipost',
    name: 'Saudi Post',
    nameAr: 'بريد السعودية',
    country: 'SA',
    logo: '/logos/saudipost-logo.svg',
    logoDark: '/logos/saudipost-logo-dark.svg',
    colors: {
      primary: '#006C35', // الأخضر
      secondary: '#FFB81C', // الأصفر
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#006C35',
      buttonHover: '#00532A',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#00A651',
      warning: '#FFB500',
      error: '#DC3545'
    },
    fonts: {
      family: "'Saudi Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== الكويت =====
  kwpost: {
    id: 'kwpost',
    name: 'Kuwait Post',
    nameAr: 'بريد الكويت',
    country: 'KW',
    logo: '/logos/kwpost-logo.svg',
    logoDark: '/logos/kwpost-logo-dark.svg',
    colors: {
      primary: '#007A33', // الأخضر
      secondary: '#DA291C', // الأحمر
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#007A33',
      buttonHover: '#005D26',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Kuwait Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== قطر =====
  qpost: {
    id: 'qpost',
    name: 'Qatar Post',
    nameAr: 'بريد قطر',
    country: 'QA',
    logo: '/logos/qpost-logo.svg',
    logoDark: '/logos/qpost-logo-dark.svg',
    colors: {
      primary: '#8E1838', // الأحمر الداكن
      secondary: '#FFFFFF', // الأبيض
      accent: '#8E1838',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#8E1838',
      buttonHover: '#6E132B',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Qatar Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== عمان =====
  omanpost: {
    id: 'omanpost',
    name: 'Oman Post',
    nameAr: 'بريد عمان',
    country: 'OM',
    logo: '/logos/omanpost-logo.svg',
    logoDark: '/logos/omanpost-logo-dark.svg',
    colors: {
      primary: '#ED1C24', // الأحمر
      secondary: '#009639', // الأخضر
      accent: '#FFFFFF',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#ED1C24',
      buttonHover: '#C0161D',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Oman Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  },

  // ===== البحرين =====
  bahpost: {
    id: 'bahpost',
    name: 'Bahrain Post',
    nameAr: 'بريد البحرين',
    country: 'BH',
    logo: '/logos/bahpost-logo.svg',
    logoDark: '/logos/bahpost-logo-dark.svg',
    colors: {
      primary: '#CE1126', // الأحمر
      secondary: '#FFFFFF', // الأبيض
      accent: '#CE1126',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#5A5A5A',
      border: '#E0E0E0',
      button: '#CE1126',
      buttonHover: '#A80E1D',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545'
    },
    fonts: {
      family: "'Bahrain Post', 'Cairo', 'Arial', sans-serif",
      sizes: {
        xs: '11px',
        sm: '13px',
        base: '15px',
        lg: '18px',
        xl: '24px',
        xxl: '30px'
      },
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      xxl: '48px'
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '50%'
    },
    style: {
      buttonShape: 'rounded',
      formField: 'outlined',
      shadow: 'light',
      hasGradient: false
    },
    responsive: {
      mobileBreakpoint: '768px',
      tabletBreakpoint: '1024px'
    },
    localization: {
      rtl: true,
      language: 'both'
    }
  }
};

// ===== دوال مساعدة =====
export const getThemeById = (companyId: string): CompanyTheme | undefined => {
  return SHIPPING_COMPANY_THEMES[companyId.toLowerCase()];
};

export const getThemesByCountry = (countryCode: string): CompanyTheme[] => {
  return Object.values(SHIPPING_COMPANY_THEMES).filter(
    (theme) => theme.country === countryCode.toUpperCase()
  );
};

export const getAllThemes = (): CompanyTheme[] => {
  return Object.values(SHIPPING_COMPANY_THEMES);
};

export const getAllThemeIds = (): string[] => {
  return Object.keys(SHIPPING_COMPANY_THEMES);
};

// ===== تصدير Types =====
export type ThemeId = keyof typeof SHIPPING_COMPANY_THEMES;
export type Theme = CompanyTheme;
