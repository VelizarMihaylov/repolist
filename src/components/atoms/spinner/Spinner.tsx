import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const animation = css`
  animation: ${spin} 2s linear infinite;
`;

const StyledSpinner = styled.div`
  border: 8px solid ${({ theme: { colours } }) => colours.crowberryBlue};
  border-top: 8px solid ${({ theme: { colours } }) => colours.gallery};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 9999;
  ${animation};
`;

const Spinner: React.FC = () => {
  return <StyledSpinner />;
};

export default Spinner;
