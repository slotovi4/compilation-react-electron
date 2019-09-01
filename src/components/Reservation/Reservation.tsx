import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Reservation.scss';

const initialState: IState = {
    imgLoaded: false
};

const Reservation = ({ places }: IProps) => {
    const [imgLoaded, setImgLoaded] = React.useState(initialState.imgLoaded);
    const cl = cn('Reservation');

    return (
        <>
            {!imgLoaded && <span>Loading...</span>}
            <div className={cl('ImageContainer')}>
                <img src="img/reservation.jpg" alt="reservation_image" onLoad={() => setImgLoaded(true)} />
                {imgLoaded && (
                    <div className={cl('PlacesContainer')}>
                        {places.map((place, i) => {
                            return (<div className={cl('Place', { status: place.status })} key={`place_${i}`} style={{
                                width: place.width,
                                height: place.height,
                                left: place.x,
                                top: place.y
                            }}></div>);
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Reservation;

interface IState {
    imgLoaded: boolean;
}

interface IProps {
    places: IPlace[];
}
