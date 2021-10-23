import { DetailedHTMLProps, TableHTMLAttributes } from 'react';
import styled from 'styled-components';

export type TableContainerProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const StyledTableContainer: React.FC<TableContainerProps> = styled.table`
  th,
  td {
    min-height: ${({ theme }) => theme.pxToRem(50)};
    color: ${({ theme }) => theme.colours.charcoalDust};
    padding: ${({ theme }) =>
      theme.pxToRem({
        top: 13,
        left: 20,
        bottom: 13,
        right: 20,
      })};
    text-align: left;
    vertical-align: top;

    th + th,
    td + td {
      border-left: 1px solid ${({ theme }) => theme.colours.crowberryBlue};
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

const TableContainer: React.FC<TableContainerProps> = ({ ...props }) => {
  return <StyledTableContainer {...props} />;
};

export default TableContainer;
