import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Place.scss';

const Place = ({ place, onPlaceClick }: IProps) => {
    const cl = cn('Place');

    return (
        <div
            className={cl({ status: place.status })}
            onClick={() => onPlaceClick(place)}
            style={{
                width: place.width,
                height: place.height,
                left: place.left,
                top: place.top
            }}>
        </div>
    );
};

export default Place;

interface IProps {
    place: IPlace;
    onPlaceClick: (place: IPlace) => void;
}
