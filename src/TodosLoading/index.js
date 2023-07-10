import svgLoading from './loading.svg';

function TodosLoading() {
    return (
        <>
            <p className="msg">Cargando...</p>
            <img width={60} height={60} src={svgLoading} alt="Loading" />
        </>
    );
}

export { TodosLoading };