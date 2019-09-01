import * as React from 'react';
import * as Modal from 'react-modal';
import { cn } from '@bem-react/classname';
import './ReservationModal.scss';

const ReservationModal = ({ show, onClose, place }: IProps) => {
    const cl = cn('ReservationModal');

    return (
        <Modal
            isOpen={show}
            contentLabel='reservation-modal'
            onRequestClose={onClose}
            ariaHideApp={false}
            closeTimeoutMS={300}
        >
            <div className={cl()}>
                <span className={cl('Title')}>Id столика: {place.id}</span>
            </div>
        </Modal>
    );
};

export default ReservationModal;

interface IProps {
    show: boolean;
    place: IPlace;
    onClose: () => void;
}
