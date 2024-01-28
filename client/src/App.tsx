import * as React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from './router';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
