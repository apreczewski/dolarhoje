const size = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1366,
  xxl: 1600,
  xxxl: 1900,
};

export const device = {
  minXXS: `(min-width:${size.xxs}px)`,
  minXS: `(min-width:${size.xs}px)`,
  minSM: `(min-width:${size.sm}px)`,
  minMD: `(min-width:${size.md}px)`,
  minLG: `(min-width:${size.lg}px)`,
  minXL: `(min-width:${size.xl}px)`,
  minXXL: `(min-width:${size.xxl}px)`,
  minXXXL: `(min-width:${size.xxxl}px)`,

  maxXXS: `(max-width: ${size.xxs - 1}px)`,
  maxXS: `(max-width: ${size.xs - 1}px)`,
  maxSM: `(max-width: ${size.sm - 1}px)`,
  maxMD: `(max-width: ${size.md - 1}px)`,
  maxLG: `(max-width: ${size.lg - 1}px)`,
  maxXL: `(max-width: ${size.xl - 1}px)`,
  maxXXL: `(max-width: ${size.xxl - 1}px)`,
  maxXXXL: `(max-width: ${size.xxxl - 1}px)`,
};
