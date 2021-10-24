import styled from 'styled-components';

export type PageContainerProps = {
  children?: React.ReactNode;
  title?: string;
};

const StyledPageContainer = styled.div`
  & header {
    max-width: ${({ theme }) => theme.pxToRem(960)};
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.pxToRem(56)};
  }
`;

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <StyledPageContainer>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;
