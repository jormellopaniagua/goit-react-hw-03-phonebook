import React, { Component } from 'react';
import Form from './styledComponents/Form';
import Input from './styledComponents/Input';
import Button from './styledComponents/Button';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    // Inicialización del estado con el nombre y el número del contacto
    this.state = {
      name: '',
      number: '',
    };
  }

  // Método para manejar el cambio en los campos de entrada
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Método para manejar el envío del formulario
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    // Generar un ID único para el contacto
    const id = Math.random().toString(36).substr(2, 9);
    // Llamar a la función onAddContact pasando el nuevo contacto
    this.props.onAddContact({ id, name, number });
    // Reiniciar los campos de nombre y número a vacío
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      // Formulario para agregar un nuevo contacto
      <Form onSubmit={this.handleSubmit}>
        {/* Campo de entrada para el nombre */}
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
          required
        />
        {/* Campo de entrada para el número de teléfono */}
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {/* Botón para enviar el formulario */}
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default ContactForm;
