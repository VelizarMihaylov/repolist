import styled from 'styled-components';

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const StyledLink: React.FC<LinkProps> = styled.a`
  color: ${({ theme }) => theme.colours.crowberryBlue};
  font-size: ${({ theme }) => theme.pxToRem(14)};
  letter-spacing: 0;
  line-height: 1.714;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colours.darkToneInk};
  }
`;

const Link: React.FC<LinkProps> = ({ ...props }) => {
  return <StyledLink {...props} />;
};

export default Link;
