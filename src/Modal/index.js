import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

function Modal() {
    return createPortal(
        <div className='modalContainer'>
            <form>
                <h3>Ingresa una nueva tarea</h3>
                <input type="text" placeholder='Ingresa una tarea' />
                <div className="btnContainer">
                    <button className="btn btn-cancel">Cancelar</button>
                    <button className='btn btn-save'>Cuardar</button>
                </div>
            </form>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }