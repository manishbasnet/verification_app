// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Import reducer
import reducers from '../src/reducers';
import thunk from 'redux-thunk';

//  initialState redux state
const render = (
    ui,
    {
        initialState,
        store = createStore(reducers, initialState, applyMiddleware(thunk)),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
export * from '@testing-library/react';
export { render };
