import React from 'react';

const Card = ({id,name, mail})=> {
    return (
    <>
        {/* <h1 className='tc'>Robo Friends</h1> */}
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='' src= {`https://robohash.org/${id}`} height= {200} width={200}/>
            <div>
                <h2>{name}</h2>
                <p>{mail}</p>
            </div>
        </div>
    </>
    );
}

export default Card;