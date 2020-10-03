import React from 'react';
import logo from './logo.svg';
import { selectRewards } from './features/Board/boardSlice';
import { Counter } from './features/counter/Counter';
import { Board } from './features/Board/Board';
import { useSelector, useDispatch } from 'react-redux';
import { saveData, undoData, redoData } from './features/Board/boardSlice';

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
    dispatch(undoData());
  }
  const redoClick = () => {
    dispatch(redoData());
    dispatch(redoData());
  }
  const headerCategory = ["X", "C1", "C2", "C3", "C4", "C5"];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {headerCategory.map((category, id) => {
            return <div key={id} className="headerStyle">{category}</div>
          })}
        </div>
          
          {rewards.map((reward, id) => {
            return <Board key={id} props={reward} />
          })}
          <div>
            <button 
              onClick={() => saveClick()} 
              className="butt"
            >
              Save
            </button>
            <button
              onClick={() => undoClick()}
              className="butt"
            >
              Undo
            </button>
            <button onClick={() => redoClick()}
              className="butt"
            >
              Redo
            </button>
          </div>
      </header>
    </div>
  );
}

export default App;
