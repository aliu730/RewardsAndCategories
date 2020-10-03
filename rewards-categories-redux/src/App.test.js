import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import testStore from './app/testStore';
import App from './App';


test('Renders reward types at initial load', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  expect(getByText("R1")).toBeInTheDocument();
});

test('The x button removes rendered Categories', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
});