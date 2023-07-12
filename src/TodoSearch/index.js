import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <section className="search">
      <input
        value={searchValue}
        onChange={
          (event) => {
            setSearchValue(event.target.value);
          }
        }
        placeholder="Buscar..." type="search" />
    </section>
  );
}

export { TodoSearch };