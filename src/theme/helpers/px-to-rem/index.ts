export type PxToRem = (
  size: number | { top: number; right: number; bottom: number; left: number },
  auto?: 'auto'
) => string;

export const pxToRem: PxToRem = (size, auto): string => {
  const baseSize = 16;
  if (typeof size !== 'object' && auto === 'auto') {
    return `${size / baseSize}rem auto`;
  }

  if (typeof size === 'object') {
    const { top, right, bottom, left } = size;

    return `${top / baseSize}rem ${right / baseSize}rem ${
      bottom / baseSize
    }rem ${left / baseSize}rem`;
  }

  return `${size / baseSize}rem`;
};
