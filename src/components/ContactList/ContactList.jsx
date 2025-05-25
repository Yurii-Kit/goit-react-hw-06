import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const listIteams = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.contactList}>
      {listIteams.map((listIteam) => {
        return (
          <li className={css.listIteam} key={listIteam.id}>
            <Contact listIteam={listIteam} />
          </li>
        );
      })}
    </ul>
  );
}
