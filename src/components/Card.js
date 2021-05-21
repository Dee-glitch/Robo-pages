import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className="card-container">
            <img alt='avatar' src={`https://robohash.org/${id}?set=set2&&size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;