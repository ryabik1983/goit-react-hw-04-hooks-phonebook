import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactList';
import useLocalStorage from './components/uselocalstorage/uselocalstorage';
// import Modal from './components/Modal/Modal';
import './App.css';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//     // showModal: false,
//   };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   console.log(contacts);
  //   const parsedContacts = JSON.parse(contacts);
  //   console.log(parsedContacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }
  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   console.log('App componentDidMount');

  //   if (contacts) {
  //     this.setState({ contacts: contacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('App Component update');
  //   console.log(prevState);
  //   console.log(this.state);

  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Update Contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
    // if (prevProps.contacts !== this.state.contacts) {
    //   console.log('Обновилось поле contacts');
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
  // }
  // formSubmitData = ({ name, number }) => {
  //   const newItem = { id: nanoid(), name: name, number: number };
  //   let isUnique = this.state.contacts.some(el => el.name === name);
  //   if (!isUnique) {
  //     this.setState(prevStates => ({
  //       contacts: [...prevStates.contacts, newItem],
  //     }));
  //   } else {
  //     alert(`${name} is already in contacts`);
  //   }
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // renderContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const toLowerCaseFilter = filter.toLowerCase();
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(toLowerCaseFilter),
  //   );
  // };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(el => el.id !== id),
  //   }));
  // };

  // render() {
  //   console.log('App render');

  //   const { contacts, filter, showModal } = this.state;
  //   return (
  //     <main className="main">
  //       {/* <div>
        //   <button type="button" onClick={this.toggleModal}>
        //     Open modal
        //   </button>
        //   {showModal && (
        //     <Modal onClose={this.toggleModal}>
        //       <h1>Hello!</h1>
        //       <p>#lorem ipsum dolor</p>
        //       <button type="button" onClick={this.toggleModal}>
        //         Close modal
        //       </button>
        //     </Modal>
        //   )}
        // </div> */}
       /* <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          renderContacts={this.renderContacts()}
          deleteContact={this.deleteContact}
        />
      </main>
    );
  }
}

// export default App; */

function App () {
const [filter, setFilter] = useState ('');
const [contacts, setContacts] = useLocalStorage('contacts', [
  // { id: 'id-1', name: 'Vova Putin', number: '459-12-56' },
  // { id: 'id-2', name: 'Vitya Poroshenko', number: '443-89-12' },
  // { id: 'id-3', name: 'Vova Lenin', number: '645-17-79' },
  // { id: 'id-4', name: 'Joseph Stalin', number: '227-91-26' },
]);

const formSubmitData = ({ name, number }) => {
  const newItem = { id: nanoid(), name: name, number: number };
  let isUnique = contacts.some(el => el.name === name);
  if (!isUnique) {
    setContacts(prevContacts => {
      return [...prevContacts, newItem];
    });
  } else {
    alert(`${name} is already in contacts`);
  }
};

const changeFilter = e => {
  setFilter(e.currentTarget.value);
};

const renderContacts = () => {
  const toLowerCaseFilter = filter.toLowerCase();
  return contacts.filter(el =>
    el.name.toLowerCase().includes(toLowerCaseFilter),
  );
};

const deleteContact = id => {
  setContacts(prevContacts => {
    return prevContacts.filter(el => el.id !== id);
  });
};

return (
  <main className="main">
    <h1 className="title">Phonebook</h1>
    <ContactForm onSubmit={formSubmitData} />
    <h2 className="title">Contacts</h2>
    <Filter value={filter} onChange={changeFilter} />
    <ContactsList
      renderContacts={renderContacts()}
      deleteContact={deleteContact}
    />
  </main>
);
}

export default App;