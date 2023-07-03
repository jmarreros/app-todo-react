import "./TodoSearch.css";

function TodoSearch() {
  return (
    <section className="search">
      <input
        onChange={
          (event) => console.log(event.target.value)
        }
        placeholder="Buscar..." type="search" />
    </section>
  );
}

export { TodoSearch };