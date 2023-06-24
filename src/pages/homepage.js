import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { Button } from 'primereact/button';

const Homepage = () => {

  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  // console.log("Value hai -> ",loggedInUser);

  const logout = () => {
    signOut(auth).then(()=>{
      dispatch({
        type: "LOGOUT2",
        payload: null,
      });
      alert("Successfully Logout");
      navigate("/login");
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <>
    <div className='container'>
    {!loggedInUser && (
      <>
      <h1>Login Kro Beta !</h1>
      </>
    )
    }
    {
      loggedInUser && (
        <>
        <h1>Welcome {loggedInUser.email && loggedInUser.email.split('@')[0]} !</h1>
        {/* <button className="btn btn-danger" onClick={logout}>Logout</button> */}
        <Button label="Logout" icon="pi pi-check" onClick={logout} />
        </>
      )
    }
    </div>
    </>
  )
}

export default Homepage