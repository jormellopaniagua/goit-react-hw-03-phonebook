import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Page from './styledComponents/Page';

export class App extends Component {
  constructor(props) {
    super(props);
    // Inicialización del estado con los contactos y el filtro
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  // Método para agregar un nuevo contacto al estado
  addContact = newContact => {
    const { contacts } = this.state;
    // Verificar si el nombre del contacto ya existe en la lista
    const contactExists = contacts.some(
      contact => contact.name === newContact.name
    );
    // Si el contacto ya existe, mostrar una alerta y no agregarlo
    if (contactExists) {
      alert(
        'Contact name already exists in the phonebook. Please choose a different name.'
      );
      return;
    }
    // Si el contacto no existe, agregarlo al estado
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // Método para manejar el cambio en el filtro
  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  // Método para eliminar un contacto del estado
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    // Filtrar los contactos según el filtro
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Page>
        <h1>Phonebook</h1>

        {/* Componente para agregar un nuevo contacto */}
        <ContactForm onAddContact={this.addContact} />

        <div>
          <h2>Contacts</h2>

          {/* Componente para filtrar los contactos */}
          <Filter filter={filter} onChange={this.handleFilterChange} />

          {/* Componente para mostrar la lista de contactos */}
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Page>
    );
  }
}
