import './Line.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seat from './Seat';

const Line = (props) => {
    

    return (
        <div className='line container'>
            <h1>{props && props.routes.filter(x => x.route_id == props.line)[0].route}</h1>
            <div >
                {
                    props && 
                    props.test.filter(x => x.route_id == props.line).filter(y => y.from_station_id >= props.first).filter(z => z.to_station_id <= props.last).map(q => q.Seat_Number).filter((w, index, array) => array.indexOf(w) === index).map(p =>  <Seat key={p} number={p}/> )
                }


            </div>
        </div>
    );
}

export default Line;
