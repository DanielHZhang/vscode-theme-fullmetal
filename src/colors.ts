export function opacity(color: string, percentage: number): string {
  if (!/^#[0-9a-f]{6}$/i.test(color)) {
    throw new Error(`Expected a 6-digit hex color without alpha, received ${color}`);
  }
  const alpha = percentage > 1 ? percentage / 100 : percentage;
  if (!(alpha >= 0 && alpha <= 1)) {
    throw new Error(`Opacity must be between 0 and 1 (or 0 and 100 as a percentage), received ${percentage}`);
  }
  return `${color}${Math.round(255 * alpha)
    .toString(16)
    .padStart(2, '0')}`;
}

// Unused colors:
// '#fe5c57',
// '#2a2749bd',
// '#21283b',
// '#5bf78e',
// '#8acd5b',
// '#ea31b5',
// '#ff6ac1',
// '#2a314b',
// '#6d0b2c8a',
// '#78e6c3',
// '#23386e',
// '#dd9046',
// '#1a2950',
// '#e98d8f94',
// '#78e6c3',
// '#23386e',
// '#283140',
// '#0b1115',
// '#141b24e0',
// '#20283d',
// '#322e40',
// '#21283b',
// '#d6b792',
// '#c75ae8',
// '#ba92d6',
// '#01c0ce'
// '#e1cfb1',
// '#FDBAA6',

const ansiColors = {
  white: '#dbdae8',
  gray: '#90a5c8',
  black: '#0c0e15',
  red: '#ff4762',
  orange: '#dd9046',
  yellow: '#efbd5d',
  green: '#8acd5b',
  blue: '#41a7fc',
  cyan: '#3dacb4',
  // indigo: '',
  violet: '#c77ddd',
  magenta: '#d44dae',
};

const pastelColors = {
  pastelBlue: '#92d6cf',
  pastelGreen: '#add692',
  pastelGray: '#455573',
  pastelYellow: '#e1cfb1',
};

const vibrantColors = {
  vibrantYellow: '#f6b868',
  vibrantOrange: '#ff7e00',
  vibrantGreen: '#3ecd83',
  vibrantBlue: '#61afef',
};

const darkColors = {
  darkBlue: '#006aff',
  darkGreen: '#1bd56823',
};

const statusColors = {
  success: '#10a273',
  error: '#c00c0c',
  warning: '#d2723b',
};

const workbenchColors = {
  backgroundActive: '#23386e',
  backgroundActiveHighlight: '#ebb3d32d',
  backgroundDrop: opacity(ansiColors.cyan, 0.2),
  backgroundEditor: '#1a212e',
  backgroundHeader: '#181420ce',
  backgroundHover: '#1a2f65', // backgroundHover: '#1a2950',
  backgroundInactive: '#212a3f',
  backgroundInlayHint: '#253c7a70',
  backgroundMatch: '#78e6c346',
  backgroundPopover: '#111520ee',
  backgroundSidebar: '#141b24',
  backgroundSelection: '#3a5599ac',
  backgroundLabel: '#283140',
  backgroundDebug: '#73421b',
  foreground: '#dcbb',
  invisible: '#0000',
  border: opacity(pastelColors.pastelGray, 0.2),
};

const tokenColors = {
  boolean: ansiColors.orange,
  string: ansiColors.green,
  number: ansiColors.orange,
  variable: pastelColors.pastelBlue,
};

export const colors = {
  ...workbenchColors,
  ...vibrantColors,
  ...darkColors,
  ...pastelColors,
  ...statusColors,
  ...tokenColors,
  ...ansiColors,
};
