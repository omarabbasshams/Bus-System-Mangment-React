import './Inputs.scss'
import React, { useState, useEffect, useRef } from 'react';

const Inputs = (props) => {

    const [startstations, setstartStation] = useState([])
    const [endstations, setendStation] = useState([])
    const [line,setLine]=useState(0)
    const startstationselect = useRef()
    const endstationselect = useRef()
    useEffect(() => {

        while (startstationselect.current.firstChild) {
            startstationselect.current.removeChild(startstationselect.current.lastChild);
        }
        startstations.map(x => {
            const postNode = document.createElement("option");
            postNode.value = x.station_id
            postNode.innerText = x.name
            startstationselect.current.appendChild(postNode)
        })





    }, [startstations])

    useEffect(()=>{
        while (endstationselect.current.firstChild) {
            endstationselect.current.removeChild(endstationselect.current.lastChild);
        }
        endstations.map(x => {
            const postNode = document.createElement("option");
            postNode.value = x.station_id
            postNode.innerText = x.name
            endstationselect.current.appendChild(postNode)
        })
    },[endstations])
    const selectstartStation = (event) => {
        setstartStation(props.omar2.filter(x => x.route_id == event))
        setLine(event)

    }
    const selectendStation = (event) => {
        setendStation(props.omar2.filter(x => x.route_id == line))
        props.omar4(event)


    }
    const finalfun=(e)=>{
        props.omar5(e)
        props.omar3(line)

    }
    return (
        <>
            {props.omar.length > 0 &&




                <div className='container' >
                    <select class="form-select" aria-label="Default select example" onChange={(e) => selectstartStation(e.target.selectedIndex)}>
                        <option selected>choose Route</option>
                        {props.omar.map(x => (


                            <option value={x.route_id}>{x.route}</option>
                        ))
                        }

                    </select>
                    <select class="form-select" aria-label="Default select example" ref={startstationselect} onChange={(e) => selectendStation(e.target.options[e.target.selectedIndex].value)}>
                        <option selected>choose start station</option>

                    </select>
                    <select class="form-select" aria-label="Default select example" ref={endstationselect} onChange={(e)=>finalfun(e.target.options[e.target.selectedIndex].value)}>
                        <option selected>Open this select menu</option>

                    </select>
                </div>
            }
        </>
    );
}

export default Inputs;
