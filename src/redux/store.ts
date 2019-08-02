import { RematchRootState, init } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { testModel } from './models';

const models = {
    testModel
};

export const browserHistory: History = createBrowserHistory();

export const store = init({
    models,
    redux: {
        initialState: {},
        reducers: {
            router: connectRouter(browserHistory)
        },
        middlewares: [routerMiddleware(browserHistory)]
    }
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models> & LoadingPlugin;

interface LoadingPlugin {
    loading: {
        models: RematchRootState<typeof models>;
        effects: Dispatch;
    };
}
