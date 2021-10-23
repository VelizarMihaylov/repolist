import { colours, typography, breakPoints } from './config';
import { pxToRem, PxToRem } from './helpers';

export type Theme = {
  colours: typeof colours;
  typography: typeof typography;
  breakPoints: typeof breakPoints;
  pxToRem: PxToRem;
};

const theme = {
  colours,
  typography,
  breakPoints,
  pxToRem,
};

export default theme;
