import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxComponent = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Minha lista" />
      <FormControlLabel control={<Checkbox />} label="Repositorio" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Teste de proficiência" />
      <FormControlLabel control={<Checkbox />} label="Alguma tarefa" />
    </FormGroup>
  );
}

export default CheckboxComponent;