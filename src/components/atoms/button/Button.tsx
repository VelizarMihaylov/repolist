import styled from 'styled-components';

export type ButtonProps = {
  variant?: 'primary';
  size?: 'small';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const StyledButton: React.FC<ButtonProps> = styled.button<{
  variant: 'primary';
  size?: 'small';
}>`
  display: inline-block;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: ${({ theme, variant }) =>
    theme.colours.button[variant].background};
  line-height: ${({ theme, size }) =>
    size === 'small' ? theme.pxToRem(48) : theme.pxToRem(56)};
  padding: ${({ theme, size }) =>
    size === 'small'
      ? theme.pxToRem({ top: 0, bottom: 0, right: 12, left: 12 })
      : theme.pxToRem({ top: 0, bottom: 0, right: 44, left: 44 })};
  border-radius: ${({ theme }) => theme.pxToRem(12)};
  color: ${({ theme }) => theme.colours.white};
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 700;
  cursor: pointer;

  & svg {
    fill: ${({ theme }) => theme.colours.white};
    margin-top: -2px;
    margin-left: 8px;
  }
  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.colours.button[variant].hover};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  ...props
}): React.ReactElement => {
  return (
    <StyledButton {...props} variant={variant} size={size}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
