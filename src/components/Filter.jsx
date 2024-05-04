import React from 'react';
import FilterStyled from './styledComponents/FilterStyled';
import Input from './styledComponents/Input';
import Label from './styledComponents/Label';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterStyled>
      {/* Etiqueta y entrada para filtrar contactos por nombre */}
      <Label htmlFor="filter">Filter contacts by name:</Label>
      <Input
        type="text"
        id="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
      />
    </FilterStyled>
  );
};

export default Filter;
//
