import logo from './logo.svg';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import './App.css';
import Seat from './Seat';
import Line from './Line';
import Inputs from './Inputs';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Login from './Login';

function App() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OGE1OTEwNi0wMGFjLTRmMzUtOTcyOC0zZWJmNjZiYmNlMWUiLCJqdGkiOiIxMjhiOGQ4YTU5ZTI3NzU5YWRlNzlkMWJlNjY1NDYyMWQ2MzhmMTViYjQ4NThiNzBkNzMzNDQyOGQ2OTIyOGU1MmQzNDg0MGM4OGIzZjg2MiIsImlhdCI6MTY3ODM3NjIyNS43OTg1MjIsIm5iZiI6MTY3ODM3NjIyNS43OTg1MywiZXhwIjoxNzA5OTk4NjI0LjU5ODA2NCwic3ViIjoiMiIsInNjb3BlcyI6W119.cUD7xfgmZOe3JysVUZ7HHal-q-BFg9AeV10IpoPeMINguN6sCwxBd4iXXSC5ggH-GP95ZIBquY6NvCK-OtDQ3D6YPfrXtBUBLB47t3xY5ebWVKeBb8upDuxWvjll5gQx12zs3vlU7RbxMkKumSmTYb2reJQj-qfkYpTneEa2jcfKZPD4E70cPLnQJ5twZyfp3sdPmZcljro7Fg6bEC7xQPscBiABuBpeb3Ee0GRn7R0KvABnKcV4RFeQQ5Qxkh3QV4OEy29wRg0kW4CDTpnAcG5NyaEy3HGwZsX-qyTR7e5EFmHIb59B_KmxOpUI2EyR2Tr5J_H80iCHEoWI2IoGIaq_gMVnHPFC0FJadLCE0VU274rOEEZ9Cwnd1xJj55WELv5Qs-XJJqkUkCmDQ_A0RCjXtQEuMAwHzFYABOjdRK-2SH2qRC_-4CPBJSSatMrEKkZ_WFzNxTn3tl1OyF50ATxqO8I14QbufGU-yZHQ_u98HWUIqkQggJYcQ8IbMuGBXwee0Au5M1EGmjG2lBU7Yrg3910V2n7tE6tInDHPQsD74tTpOxPbqooK975sbTmL_9qbmsaiPFd7gNQki7hVZVa-ljnPtvN1n3ZD0xz7gltX1oI7a2Gs3IKtZH7oyMnlXpvBcsGXJ-OfwwfH2wUDztucrnvQ-LKDr61V8xyA1rw'
    const [test, setTest] = useState([])
    // const [token,setToken]=useState('')
    const [routes, setRoute] = useState([])
    const [stations, setStations] = useState([])
    const [line, setLine] = useState(0)
    const [appendline, setAppendline] = useState([])
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(0)
    const lines = useRef()
    const handelToken = (e) =>{

        // setToken(e)
        // console.log(token)

    }
    useEffect(() => {
        axios.get('http://bus.com/api/getAvilble', { headers: {
            Authorization: `Bearer ${token}` ,
            Accept:'application/json'

        } })
            .then(res => {
                console.log(res)
                setTest(res.data.message.availability)
                setRoute(res.data.message.trips)
                setStations(res.data.message.stations)
                console.log(test)

            })

    }, [])
    useEffect(() => {
        if (line) {

            setAppendline(<Line test={test} line={line} routes={routes} first={first} last={last} />)

        }
    }, [line])
    const handelfirst = (f) => {
        setFirst(f)
    }
    const handellast = (l) => {
        setLast(l)
    }
    const handellines = (e) => {
        if (e) {

            setLine(e)
        }
    }

    return (
        // <div className='container'>

        //     <Login handelToken={handelToken}/>
        // </div>
        <>
          {

            test.length>0 &&
            <div className='container mt-5'>
              <Inputs omar={routes} omar2={stations} omar3={handellines} omar4={handelfirst} omar5={handellast}/>
              <div ref={lines}>
                  {line &&
                  appendline
                  }
              </div>

            </div>
          }
        </>
    );
}

export default App;
