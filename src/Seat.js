import './Seat.scss'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Seat = (props) => {
    const [data,setData]=useState([])
    const send = ()=>{
        setData({
            trip_id:1,
            from_station_id:1,
            to_station_id:2,
            seat_id:5
    })
    console.log(data)
        axios.post('http://bus.com/api/reserve',data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <div className='container'>
            {
                props && 
            <Link onClick={()=>send()} className="seatlink " key={props.number}>{props.number}</Link>
            }
        </div>
    );
}

export default Seat;
