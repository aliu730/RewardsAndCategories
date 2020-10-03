
import boardSlice from './boardSlice';
import initialState from './initialState';
import initialTestStateRemove from './initialTestRemoveState';
import initialUndoState from './initialUndoState';
import initialRevertState from './initialReverState';
import initialUndoRevert from './initialUndoRevert';
import { addCategory, removeCategory, moveCategory, undoData, redoData } from './boardSlice';

// Add test
test('Should load correct location for reward on category column', () => {
    let actual = boardSlice(initialState, addCategory({type: "R1", category: "C1"})).rewards[0].categories[0];
    let expected = {"display": true, "name": "C1"};
    // Calling addCategory should add into correct bucket of 0,0
    expect(actual).toStrictEqual(expected);
});
// Remove test
test('Should remove a category from a row with removeCategory action', () => {
    let actual = boardSlice(initialTestStateRemove, removeCategory({type: "R1", category: "C2"})).rewards[0].categories[1];
    let expected = {"display": false, "name": "C2"};
    // Calling removeCategory with appropriate action should remove target location from state.
    expect(actual).toStrictEqual(expected);
});

// Moving test
test('Should move a category to a open cell within the buckets action', () => {
    let modedBoard = boardSlice(initialTestStateRemove, moveCategory(
        {
            rewardType: "R1",
            rewardCategory: "C2",
            newCategory: "C3",
        }
    ))
    let actualMoved = modedBoard.rewards[0].categories[2];
    let actualRemoved = modedBoard.rewards[0].categories[1];
    let expected = {"display": true, "name": "C3"};
    let expectedRemoved = {"display": false, "name": "C2"}
    
    expect(actualMoved).toStrictEqual(expected);
    expect(actualRemoved).toStrictEqual(expectedRemoved);
});
  
// Undo button test with state
test('Should revert state when undo action is passed to boardSlicer', () => {
    let currentBoard = boardSlice(initialUndoState, undoData());

    let expected = initialUndoRevert;
    expect(currentBoard.undo).toStrictEqual(expected.rewards);

});

// Redo button test with state
test('Should forward state when redo is pressed to boardSlicer', () => {
    let currentBoard = boardSlice(initialUndoState, redoData());
    let expected = initialRevertState.rewards;
    expect(currentBoard.undo).toStrictEqual(expected)
});