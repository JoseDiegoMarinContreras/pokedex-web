import React, { ReactNode, useEffect, } from 'react';
import './style.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }
        if(!isOpen){
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen]);

    if(!isOpen)
        return null;

    return (
        <div className='maincontainer-modal' onClick={() => onClose && onClose()}>
            <dialog open onClick={evt => {
                evt.preventDefault();
                evt.stopPropagation();
            }}>
            <button style={{ float: 'right' }} onClick={onClose}>
                Close
            </button>

            <div>{children}</div>
        </dialog>
        </div>
    )
}

export default Modal;