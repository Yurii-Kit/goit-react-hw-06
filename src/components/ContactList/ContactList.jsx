import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ listIteams, onUpdate }) {
  // console.log(listIteams);

  return (
    <ul className={css.contactList}>
      {listIteams.map((listIteam) => {
        return (
          <li className={css.listIteam} key={listIteam.id}>
            <Contact listIteam={listIteam} handleDelete={onUpdate} />
          </li>
        );
      })}
    </ul>
  );
}
