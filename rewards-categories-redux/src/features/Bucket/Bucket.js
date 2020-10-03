import React from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import { addCategory, removeCategory, moveCategory } from '../Board/boardSlice';


export function Bucket(props) {
    const dispatch = useDispatch();
    let {type, category} = props;

    const drop = e => {
    
        e.preventDefault();
        let rewardType = e.dataTransfer.getData('type');
        let rewardCategory = e.dataTransfer.getData('category');

        let newCategory = e.target.getAttribute('data-category');
        let newType = e.target.getAttribute('data-type');

        let alreadyExist = ('true' == e.target.getAttribute('data-category-show'));
        if (rewardType === newType && !alreadyExist) {
            // if matching R types -> and new cell is empty -> move it over
            dispatch(moveCategory(
                {
                    rewardType: rewardType,
                    rewardCategory: rewardCategory,
                    newCategory: newCategory,
                }
            ));
        }
    }

    const dragOver = e => {
        // stops it from causing bugs when we don't drop etc
        e.preventDefault();
    }
    return (
        <span
            className="bucket"
            onDrop={drop}
            onDragOver={dragOver}
        >
            <Card
                type={type}
                category={category}
                buttonShow={true}
            >
                {' '}{category.display ? category.name : ' '} {' '}   
            </Card>
        </span>
    )
}
