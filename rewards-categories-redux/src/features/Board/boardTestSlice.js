import { createSlice } from '@reduxjs/toolkit';

export const boardTestSlice = createSlice({
    name: 'board',
    initialState: {
        rewards: [
            {
                type: "R1",
                categories: [
                    {
                        name: "C1",
                        display: true,
                    },
                    {
                        name: "C2",
                        display: false,
                    },
                    {
                        name: "C3",
                        display: false,
                    },
                    {
                        name: "C4",
                        display: false,
                    },
                    {
                        name: "C5",
                        display: false,
                    },
                ]
            },
            {
                type: "R2",
                categories: [
                    {
                        name: "C1",
                        display: false,
                    },
                    {
                        name: "C2",
                        display: false,
                    },
                    {
                        name: "C3",
                        display: false,
                    },
                    {
                        name: "C4",
                        display: false,
                    },
                    {
                        name: "C5",
                        display: false,
                    }
                ]
            }
        ],
        categories: [
            
        ],
        category1: {
            name: "C1",
        }
    },
    reducers: {
        // This should remove a category by it's reward type
        removeCategory: (state, action) => {
            let {type} = action.payload;
            let {category} = action.payload;
            state.rewards.map((reward) => {
                if (reward.type == type) {
                    for (let i = 0; i < reward.categories.length; i++) {
                        let cat = reward.categories[i];
                        if (cat.name == category) {
                            cat.display = false;
                        }
                    }
                }
            });
            return state;
        },
        // This adds a new category to the reward when we shift across board
        addCategory: (state, action) => {
            let {type} = action.payload;
            let {category} = action.payload;
            state.rewards.map((reward) => {
                if (reward.type == type) {
                    for (let i = 0; i < reward.categories.length; i++) {
                        let cat = reward.categories[i];
                        if (cat.name == category) {
                            cat.display = true;
                        }
                    }
                } 
            });
            return state;
        }
    }
});
export const { removeCategory } = boardTestSlice.actions;

export const selectRewards = state => state.board.rewards;

export default boardTestSlice.reducer;
