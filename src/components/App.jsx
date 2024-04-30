import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Page from './styledComponents/Page';

export class App extends Component {
  constructor(props) {
    super(props);
    // Intenta cargar los contactos desde el localStorage
    const storedContacts = localStorage.getItem('contacts');
    this.state = {
      contacts: storedContacts ? JSON.parse(storedContacts) : [],
      filter: '',
    };
  }

  componentDidMount() {
    // Cuando el componente se monta, verificamos si hay contactos en localStorage y los cargamos en el estado
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Cuando el estado de los contactos cambia, actualizamos el localStorage
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {
    // Cuando el componente se desmonta, no es necesario realizar ninguna acción en este caso
    // Pero es una buena práctica limpiar cualquier suscripción a eventos o recursos utilizados por el componente
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const updatedContacts = [...contacts, newContact];
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Page>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Page>
    );
  }
}
