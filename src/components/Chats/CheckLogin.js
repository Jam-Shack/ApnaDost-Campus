import "../../ChatAllPage.css";
import Chat from "./Chat";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

function CheckLogin() {
  const { userEmail } = useParams();
  
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  return (
    <>
      {loggedInUser ? (
        <Chat userEmail={userEmail} />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default CheckLogin;
