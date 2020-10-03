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
});

// it ('should render without crashing', () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });
