import * as React from 'react';
import { cn } from '@bem-react/classname';
import { ReservationModal } from '../';
import './Reservation.scss';

const initialState: IState = {
    imgLoaded: false,
    showModal: false,
    selectedPlace: null
};

const Reservation = ({ places }: IProps) => {
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
                    <>
                        <div className={cl('PlacesContainer')}>
                            {places.map((place, i) => {
                                return (
                                    <div
                                        className={cl('Place', { status: place.status })}
                                        onClick={() => onPlaceClick(place)}
                                        key={`place_${i}`}
                                        style={{
                                            width: place.width,
                                            height: place.height,
                                            left: place.left,
                                            top: place.top
                                        }}>
                                    </div>);
                            })}
                        </div>
                        {selectedPlace && <ReservationModal show={showModal} onClose={onCloseModal} place={selectedPlace} />}
                    </>
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
