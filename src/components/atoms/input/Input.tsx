import styled from 'styled-components';

export type InputProps = {
  error?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const StyledInput: React.FC<InputProps> = styled.input<{ error: boolean }>`
  position: relative;
  border: ${({ theme, error }) =>
    `1px solid ${
      error ? theme.colours.redRampage : theme.colours.charcoalDust
    }`};
  background-color: ${({ theme }) => theme.colours.white};
  color: ${({ theme }) => theme.colours.darkToneInk};
  border-radius: ${({ theme }) => theme.pxToRem(16)};
  font-size: ${({ theme }) => theme.pxToRem(14)};
  line-height: ${({ theme }) => theme.pxToRem(52)};
  padding: ${({ theme }) =>
    theme.pxToRem({ left: 16, top: 0, right: 16, bottom: 0 })};

  &:focus {
    border-color: ${({ error, theme }): string =>
      error ? theme.colours.redRampage : theme.colours.swimmersPool};
    outline: none;
  }

  &::placeholder {
    color: ${({ error, theme }): string =>
      error ? theme.colours.redRampage : theme.colours.charcoalDust};
  }
`;

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return <StyledInput error={error} type={props.type || 'text'} {...props} />;
};

export default Input;
