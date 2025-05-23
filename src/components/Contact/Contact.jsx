import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({
  listIteam: { id, name, number },
  handleDelete,
}) {
  return (
    <>
      <div>
        <p>
          <FaUser />
          <span className={css.text}>{name}</span>
        </p>

        <p>
          <BsFillTelephoneFill />
          <span className={css.text}>{number}</span>
        </p>
      </div>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
}
