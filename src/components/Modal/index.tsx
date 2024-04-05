import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ iseOpen, onClose, children }) => {
    if(!iseOpen)
        return null;

    return createPortal(
        <dialog open arial-modal={true}>
            <h2 >Modal Dialog</h2>
            <button onClick={onClose}>
                Close
            </button>

            <div>{children}</div>
        </dialog>,
        document.body
    )
}

export default Modal;