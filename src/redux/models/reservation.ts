import { createModel } from '@rematch/core';

const initialState: IState = {
    places: [
        {
            left: 131,
            top: 32,
            width: 63,
            height: 43,
            status: 'inaccessible',
            id: '1'
        },
        {
            left: 225,
            top: 91,
            width: 63,
            height: 48,
            status: 'notReserved',
            id: '2'
        },
        {
            left: 75,
            top: 136,
            width: 53,
            height: 81,
            status: 'reserved',
            id: '3'
        }
    ]
};

export default createModel({
    state: initialState,
    reducers: {
    },
    effects: dispatch => ({
    })
});

interface IState {
    places: IPlace[];
}
