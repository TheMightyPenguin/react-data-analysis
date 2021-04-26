export const theme = {
  colors: {
    primary: 'blue'
  },

  spacing: {
    small: 4,
    medium: 12,
    large: 24
  }
} as const;

export type Theme = typeof theme;
