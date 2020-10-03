import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import testStore from './app/testStore';
import App from './App';


test('Renders reward types at initial load', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText("C1")).toBeInTheDocument();
  expect(getByText("X")).toBeInTheDocument();
});

test('Renders reward types in correct location on load', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  //You expect twelve instead of 30 because the mock rows only contains 2 rewards which is 2x 5 + 2 header cards
  expect(document.getElementsByClassName("card").length).toEqual(12);
});
