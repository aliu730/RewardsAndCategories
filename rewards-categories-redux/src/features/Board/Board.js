import React from 'react';
import { Card } from '../Card/Card';
import { Bucket } from '../Bucket/Bucket';
export function Board(props) {

    //So few things. We need to update state whenever we make a change
    // When we move a card we need to update the movement using a dispatch
    let {type, categories} = props.props;

    return (
        <div>
            <Card
                type={type}
                category={{category: "R1", name:type, display: true}}
                buttonShow={false}
            >
                {type} 
            </Card>            
            {categories.map((category, id) => {
                return (
                    <Bucket 
                        key={id}
                        type={type}
                        category={category}>
                    </Bucket>           
                ) 
            })}  
        </div>
    )
}
