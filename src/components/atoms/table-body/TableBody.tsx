import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type TableBodyProps = {
  children?: DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
};

const StyledTableBody = styled.tbody`
  tr:nth-child(2n) td {
    background: ${({ theme }) => theme.colours.white};
  }
`;

const TableBody: React.FC<TableBodyProps> = ({ ...props }) => {
  return <StyledTableBody {...props} />;
};

export default TableBody;
