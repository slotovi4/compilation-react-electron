import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../redux/store';
import { Home, Reservation } from '../../components';

const ReservationContainer = ({ reservation }: Props) => {
    return (
        <div>
            <Home />
            <Reservation places={reservation.places} />
        </div>
    );
};

const mapState = (state: IRootState) => ({
    reservation: state.reservation
});

export default connect(mapState)(ReservationContainer);

type Props = ReturnType<typeof mapState>;
