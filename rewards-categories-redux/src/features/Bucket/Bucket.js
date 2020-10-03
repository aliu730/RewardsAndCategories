import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import { addCategory, removeCategory } from '../Board/boardSlice';


export function Bucket(props) {
    const dispatch = useDispatch();
    let {type, category} = props;

    const drop = e => {
        e.preventDefault();
        let rewardType = e.dataTransfer.getData('type');
        let rewardCategory = e.dataTransfer.getData('category');
        let newCategory = e.target.getAttribute('data-category');
        let newType = e.target.getAttribute('data-type');
        let alreadyExist = e.target.getAttribute('data-category-show');
        if (rewardType == newType) {
            dispatch(removeCategory({type: rewardType, category: rewardCategory}));
            if (alreadyExist) {
                dispatch(addCategory({type: rewardType, category: newCategory}));
            }
        }
    }

    const dragOver = e => {
        // stops it from causing bugs when we don't drop etc
        e.preventDefault();
    }
    return (
        <span
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
