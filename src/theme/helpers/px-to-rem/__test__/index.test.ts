import { pxToRem } from '../';

describe('generateTheme', () => {
  it('should calculate px values in rem', () => {
    expect(pxToRem(16)).toEqual('1rem');
  });

  it('should calculate a shorthand value when object is passed', () => {
    expect(
      pxToRem({
        top: 24,
        right: 24,
        bottom: 24,
        left: 24,
      })
    ).toEqual('1.5rem 1.5rem 1.5rem 1.5rem');
  });

  it('should sey auto shorthand if auto is passed and size is not an object', () => {
    expect(pxToRem(16, 'auto')).toEqual('1rem auto');
  });
});
