import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCategory } from '../Board/boardSlice';

export function Card(props) {
    const dispatch = useDispatch();
    const dragStart = e => {
        e.dataTransfer.setData('type', props.type);
        e.dataTransfer.setData('category', props.category.name);
        e.dataTransfer.setData('data-category-show', props.category.display);
    }
    return (
        <div
            draggable={props.category.display ? props.category.display : false}
            className="card"
            onDragStart={dragStart}
            data-category={props.category.name}
            data-type={props.type}
            data-category-show={props.category.display}
        >
            {' '}
            {props.category.display ? 
                props.type : '_'    }
            {' '}   
            {props.category.display && props.buttonShow === true ? 
                <button 
                    id="card"
                    onClick={
                        () => dispatch(removeCategory({type: props.type, category: props.category.name}))
                    }>x
                </button>
            : ""}
        </div>
    );
}