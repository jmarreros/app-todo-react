import svgError from './error.svg';

function TodosError() {
    return (
        <>
            <p className='msg'>Existe un Error!!</p>
            <img width={60} height={60} src={svgError} alt="Error!" />
        </>
    );
}

export { TodosError };