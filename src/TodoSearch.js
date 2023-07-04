import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {

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