import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState.js';
let savedState = JSON.parse(localStorage.getItem("state"));
let state = savedState ? savedState : initialState;

export const boardSlice = createSlice({
    name: 'board',
    initialState: state,
    reducers: {
        // This should remove a category by it's reward type
        removeCategory: (state, action) => {
            let tempState = JSON.parse(JSON.stringify(state.rewards));
            state.undo.push(tempState);

            let {type} = action.payload;
            let {category} = action.payload;

            state.rewards.map((reward) => {
                if (reward.type === type) {
                    for (let i = 0; i < reward.categories.length; i++) {
                        let cat = reward.categories[i];
                        if (cat.name === category) {
                            cat.display = false;
                        }
                    }

                }
                return null;
            });

            return state;
        },
        // This adds a new category to the reward when we shift across board
        addCategory: (state, action) => {
            let tempState = state.rewards;
            let tempStateArray = state.undo;
            tempStateArray.push(tempState);
            state.undo = tempStateArray;

            let {type} = action.payload;
            let {category} = action.payload;
            
            state.rewards.map((reward) => {
                if (reward.type === type) {
                    for (let i = 0; i < reward.categories.length; i++) {
                        let cat = reward.categories[i];
                        if (cat.name === category) {
                            cat.display = true;
                        }
                    }
                } 
                return null;
            });

            return state;
        },
        saveData: (state, action) => {
            localStorage.setItem("state", JSON.stringify(state));
        },
        undoData: (state, action) => {
            if (state.undo.length > 0) {
                let tempRewards = JSON.parse(JSON.stringify(state.rewards));

                let currRewards = state.undo.pop();
                state.rewards = currRewards;
                state.redo.push(tempRewards);
            }
            
            return state;
        },
        redoData: (state, action) => {
            if (state.redo.length > 0) {
                let tempRewards = JSON.parse(JSON.stringify(state.rewards));

                let currRewards = state.redo.pop();
                state.rewards = currRewards;
                state.undo.push(tempRewards);
            }
            return state;

        }
    }
});
export const { removeCategory, addCategory, saveData, undoData, redoData } = boardSlice.actions;

export const selectRewards = state => state.board.rewards;

export default boardSlice.reducer;
