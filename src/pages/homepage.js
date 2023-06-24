import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

const Homepage = () => {
  const toast = useRef(null);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible,setVisible] = useState()
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  // console.log("Value hai -> ",loggedInUser);

  const accept = () => {
    signOut(auth).then(()=>{
      dispatch({
        type: "LOGOUT2",
        payload: null,
      });
      // alert("Successfully Logout");
      navigate("/login");
      toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }).catch(error => {
      console.log(error);
    })
  } 

  const reject = () => {
    setVisible(false)
  } 

  return (
    <>
    <Toast ref={toast} />
    <div className='container'>
    {!loggedInUser && (
      <>
      
      </>
    )
    }
    {
      loggedInUser && (
        <>
        <h1>Welcome {loggedInUser.email && loggedInUser.email.split('@')[0]} !</h1>
        {/* <button className="btn btn-danger" onClick={logout}>Logout</button> */}
        <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to Logout?"
         header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
        <Button label="Logout" icon="pi pi-check" onClick={() => setVisible(true)} />
        </>
      )
    }
    </div>
    </>
  )
}

export default Homepage