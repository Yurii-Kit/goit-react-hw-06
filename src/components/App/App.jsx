import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return startContacts;
  });

  const [inputValue, setInputValue] = useState('');
  const [debouncedContacts] = useDebounce(inputValue, 1000);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const filteredContacts = useMemo(() => {
    console.log('filtering contacts...');
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedContacts.toLowerCase()),
    );
  }, [debouncedContacts, contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  };

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={inputValue} onChange={setInputValue} />
        <ContactList listIteams={filteredContacts} onUpdate={deleteContact} />
      </div>
    </>
  );
}

export default App;
