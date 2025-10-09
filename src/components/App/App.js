import React, { Component } from 'react';
import ContactForm from 'components/Contacts/ContactForm/';
import Filter from 'components/Contacts/Filter';
import ContactList from 'components/Contacts/ContactList';
import initialContacts from 'contacts.json';
import Searchbar from 'components/Searchbar';
import * as API from 'components/Services/api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import { Container } from 'components/App/App.styled';

const LS_KEY = 'contact_list';

class App extends Component {
  state = {
    contacts: [],
    filter: '',

    image: '',
    imageResults: [],
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(savedState);

    if (parsedContacts && parsedContacts.length > 0) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ contacts: initialContacts });
    }
  };

  async componentDidUpdate(_, prevState) {
    // const nextContacts = this.state.contacts;
    // const prevContacts = prevState.contacts;

    // if (nextContacts !== prevContacts) {
    //   localStorage.setItem(LS_KEY, JSON.stringify(nextContacts));

    const prevImage = prevState.image;
    const nextImage = this.state.image;
    if (nextImage !== prevImage) {
      try {
        const Images = await API.getImages(nextImage);
        this.setState({ imageResults: Images });
      } catch (error) {
        console.log(error);
      }
    }
  }

  addContact = newContact => {
    const isNamePresent = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredCntacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  addImage = newImage => {
    this.setState({ image: newImage });
  };

  loadMoreImages = () => {};

  render() {
    const filteredContacts = this.getFilteredCntacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />

        <Searchbar onSubmit={this.addImage} />
        <ImageGallery images={this.state.imageResults} />
        <Button loadMore={this.loadMoreImages} />
      </Container>
    );
  }
}

export default App;
