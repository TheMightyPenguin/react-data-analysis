const FONT_WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const theme = {
  colors: {
    positive: '#4DB846',
    active: '#007FD2',
    warning: '#FC6D69',
    body: '205484',
    header: '#000000',
    border: ' A8ABB3',
  },

  typography: {
    h1: {
      weight: FONT_WEIGHTS.medium,
      size: 35,
    },
    h2: {
      weight: FONT_WEIGHTS.normal,
      size: 24,
    },
    h3: {
      weight: FONT_WEIGHTS.bold,
      size: 16,
    },
    kpi: {
      weight: FONT_WEIGHTS.normal,
      size: 56,
    },
    body: {
      weight: FONT_WEIGHTS.bold,
      size: 15,
    },
  },

  spacing: {
    none: 0,
    small: 4,
    medium: 12,
    large: 24,
  },
} as const;

export type Theme = typeof theme;

export type Color = keyof Theme['colors'];
