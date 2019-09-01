import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Place, ReservationModal } from '../';
import './Reservation.scss';

const Reservation = ({ places }: IProps) => {
    const initialState: IState = {
        imgLoaded: false,
        showModal: false,
        selectedPlace: null
    };
    const cl = cn('Reservation');
    const [imgLoaded, setImgLoaded] = React.useState(initialState.imgLoaded);
    const [showModal, setShowModal] = React.useState(initialState.showModal);
    const [selectedPlace, setSelectedPlace] = React.useState(initialState.selectedPlace);

    const onPlaceClick = (place: IPlace) => {
        setSelectedPlace(place);
        setShowModal(true);
    };

    const onCloseModal = () => {
        setSelectedPlace(null);
        setShowModal(false);
    };

    return (
        <section className={cl()}>
            {!imgLoaded && <span>Loading...</span>}
            <div className={cl('ImageContainer')}>
                <img src="img/reservation.jpg" alt="reservation_image" onLoad={() => setImgLoaded(true)} />
                {imgLoaded && (
                    <div className={cl('PlacesContainer')}>
                        {places.map(place => <Place place={place} onPlaceClick={onPlaceClick} key={`place_${place.id}`} />)}
                        {selectedPlace && <ReservationModal show={showModal} onClose={onCloseModal} place={selectedPlace} />}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Reservation;

interface IState {
    imgLoaded: boolean;
    showModal: boolean;
    selectedPlace: IPlace | null;
}

interface IProps {
    places: IPlace[];
}
