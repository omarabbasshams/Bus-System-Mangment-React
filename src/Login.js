import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = (props) => {
  const  handelEvent = (e) =>{
    e.preventDefault()

    setSend(1)
    setInterval(()=>setSend(0),1000)

  }
  const [email,SetEmail]= useState('')
  const [password,setPassowrd]= useState('')
  const [send,setSend]=useState(0)
  useEffect(()=>{
    axios.post('http://bus.com/api/login',{
        email:email,
        password:password,
        headers: {
            Accept:'application/json'
        }
    })
    .then(res=>{
        props.handelToken(res.data.token)
        console.log(res)


    })
    .catch(err=>console.log(err))
  },[send])
    return (
        <div>
            <form onSubmit={(e)=>handelEvent(e)}>

                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control"



                    name="email"
                    value={email}
                    placeholder="First Name"
                    onChange={(event) =>
                      SetEmail(event.target.value)
                    }
                    />
                    <label className="form-label" for="form2Example1">Email address</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control"

                    name="password"
                    value={password}
                    placeholder="First Name"
                    onChange={(event) =>
                      setPassowrd(event.target.value)}
                    />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>





                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>

                </div>
            </form>
        </div>
    );
}

export default Login;
