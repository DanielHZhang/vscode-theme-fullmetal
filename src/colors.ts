export function opacity(color: string, percentage: number): string {
  if (color.length === '#0000'.length || color.length === '#fffeee00'.length) {
    throw new Error('Hex color already includes alpha value');
  }
  if (percentage > 1) {
    percentage /= 100;
  }
  return `${color}${Math.round(255 * percentage).toString(16)}`;
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
  // vibrantBlue: '#006aff',
  vibrantBlue: '#61afef',
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
  backgroundHover: '#1a2950',
  backgroundInactive: '#212a3f',
  backgroundMatch: '#78e6c346',
  backgroundPopover: '#111520ee',
  backgroundSidebar: '#141b24',
  backgroundSelection: '#3a5599ac',
  backgroundLabel: '#283140',
  foreground: '#dcbb',
  invisible: '#0000',
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
  ...pastelColors,
  ...statusColors,
  ...tokenColors,
  ...ansiColors,
};
