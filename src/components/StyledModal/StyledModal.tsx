import React, {ReactNode} from 'react';
import Styles from './StyledModal.module.scss'

interface Props {
    id: string
    children: ReactNode
}

const StyledModal: React.FC<Props> = ({id, children}) => {
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box relative max-w-screen-lg">
                    <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default StyledModal;
