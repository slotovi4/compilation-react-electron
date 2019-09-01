import { createModel } from '@rematch/core';

const initialState: IState = {
    places: [
        {
            x: 131,
            y: 32,
            width: 63,
            height: 43,
            status: 'inaccessible'
        },
        {
            x: 225,
            y: 91,
            width: 63,
            height: 48,
            status: 'notReserved'
        },
        {
            x: 75,
            y: 136,
            width: 53,
            height: 81,
            status: 'reserved'
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
