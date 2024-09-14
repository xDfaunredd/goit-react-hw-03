import s from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ filterValue, setFilterValue }) => {
  const filterId = useId();

  return (
    <div className={s.container}>
      <label htmlFor={filterId} className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        id={filterId}
        className={s.inputField}
      />
    </div>
  );
};

export default SearchBox;
