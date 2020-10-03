import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/Board/boardTestSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
  },
});
