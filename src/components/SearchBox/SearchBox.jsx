import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  const handleFilterChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name
        <input
          className={css.inputBox}
          type="text"
          value={value}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
}
