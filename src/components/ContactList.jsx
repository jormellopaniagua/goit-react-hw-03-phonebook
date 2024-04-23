import React from 'react';
import ListStyled from './styledComponents/ListStyled';
import ContactStyled from './styledComponents/ContactStyled';
import Button from './styledComponents/Button';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {/* Encabezado de la lista de contactos */}
      <h2>Contact List</h2>
      {/* Lista de contactos */}
      <ListStyled>
        {contacts.map(contact => (
          <ContactStyled key={contact.id}>
            {/* Nombre y número de contacto */}
            {contact.name} - {contact.number}
            {/* Botón para eliminar contacto */}
            <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </ContactStyled>
        ))}
      </ListStyled>
    </div>
  );
};

export default ContactList;
