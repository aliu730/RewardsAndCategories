import React from 'react';
import logo from './logo.svg';
import { selectRewards } from './features/Board/boardSlice';
import { Counter } from './features/counter/Counter';
import { Board } from './features/Board/Board';
import { useSelector, useDispatch } from 'react-redux';
import { saveData, undoData } from './features/Board/boardSlice';

import './App.css';

function App() {
  const rewards = useSelector(selectRewards);
  const dispatch = useDispatch();

  // Use localStorage to save state and update.
  const saveClick = () => {
    dispatch(saveData());
  }

  const undoClick = () => {
    dispatch(undoData()); 
  }
  return (
    <div className="App">
      <header className="App-header">
          {rewards.map((reward) => {
            return <Board props={reward} />
          })}

          <button 
            onClick={() => saveClick()} 
            className="save-button"
          >
            Save
          </button>
          <button
            onClick={() => undoClick()}
          >
            Undo
          </button>
      </header>
    </div>
  );
}

export default App;
