import { createModel } from '@rematch/core';

const initialState: IState = {
    places: [
        {
            x: 20,
            y: 20,
            size: 20,
            color: 'green'
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
