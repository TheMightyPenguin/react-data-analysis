export const theme = {
  colors: {
    primary: 'blue'
  },

  spacing: {
    none: 0,
    small: 4,
    medium: 12,
    large: 24
  }
} as const;

export type Theme = typeof theme;
