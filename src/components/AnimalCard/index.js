import React from 'react';

function AnimalCard(props) {
    return (
        <div className="animals">
            <p>
                {props.data}
            </p>
        </div>
    )
}

export default AnimalCard;