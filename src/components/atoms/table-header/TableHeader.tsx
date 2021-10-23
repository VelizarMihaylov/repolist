import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type TableHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const StyledTableHeader: React.FC<TableHeaderProps> = styled.thead`
  border-collapse: collapse;

  th {
    background-color: ${({ theme }) => theme.colours.swimmersPool}33;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 1;
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ ...props }) => {
  return <StyledTableHeader {...props} />;
};

export default TableHeader;
