import React from 'react';
import styled from 'styled-components';

const Table = (props) => {
  const { children } = props;
  return (
    <TableContainer>
      <TableHead>
        <Tr>
          <Td>Description</Td>
          <Td>Category</Td>
          <Td>User</Td>
          <Td>Edit</Td>
          <Td>Delete</Td>
        </Tr>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </TableContainer>
  )
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  height: 50px;
`;

const TableBody = styled.tbody`
  
`;

const Td = styled.td`
  height: 50px
`;

const Tr = styled.tr`
`;
  
export { Table };