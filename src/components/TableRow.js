import React from 'react';
import styled from 'styled-components';
import { Trash } from 'styled-icons/feather/Trash';
import { Edit2 } from 'styled-icons/feather/Edit2';

const TableRow = (props) => {
  const { item, currentUser, trashOnClick, editOnClick } = props;
  const { id, description, category } = item;
  const { userName } = currentUser;
  return (
    <Tr key={id}>
      <Td>{description}</Td>
      <Td>{category}</Td>
      <Td>{userName}</Td>
      <Td><EditIcon onClick={editOnClick} /></Td>
      <Td><TrashIcon onClick={trashOnClick} /></Td>
    </Tr>
  );
}

const Td = styled.td`
  height: 50px
`;

const Tr = styled.tr`
`;

const TrashIcon = styled(Trash)`
  height: 20px;
  color: red;
  text-align: center;
`

const EditIcon = styled(Edit2)`
  height: 20px;
  color: orange;
`
export { TableRow };