import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/Board/boardSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
  },
});
