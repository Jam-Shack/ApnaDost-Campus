// import "../../ChatAllPage.css";
import "../../ChatAllPage.css"
// import Chat from './components/';
import Chat from './Chat'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

function CheckLogin() {
  // const [user] = useAuthState(auth)
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  return (
    <>
      {loggedInUser ? <Chat /> :<Navigate to="/login" replace={true} />}
    </>
  );
}

export default CheckLogin;
