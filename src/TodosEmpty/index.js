import svgEmpty from './empty.svg';

function TodosEmpty() {
    return (
        <>
            <p className='msg'>Crea tu primer TODO</p>
            <img width={60} height={60} src={svgEmpty} alt="Empty" />
        </>
    );
}

export { TodosEmpty };