import React from 'react';
import { Input } from './Input';
import { InputLabel } from './InputLabel';
import { Button } from './Button';

const FormContainer = (props) => {
  const { onClick, descriptionValue, categoryValue, onChangeDescription, onChangeCategory } = props;
  return ( 
    <div>
      <InputLabel 
        name='Description'
      />
      <Input 
        id="margin-dense"
        value={descriptionValue}
        margin="dense"
        name="item"
        onChange={onChangeDescription}
        type="text" 
      />
      <InputLabel 
        name='Category (Tag)'
      />
      <Input 
        label="Category"
        id="margin-dense"
        value={categoryValue}
        margin="dense"
        name="category"
        onChange={onChangeCategory} 
        type="text" 
      />
      <Button 
        onClick={onClick}
      />
    </div>
  );
}

export { FormContainer };
 