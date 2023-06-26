import React, { useEffect } from "react";
import { auth, provider, db } from "../FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import './login.css'
const Login = () => {

  var separatedString;

  let navigate = useNavigate();

  //getting state from redux store
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  
  let dispatch = useDispatch();

  useEffect(() => {
    let intended = navigate(".", { replace: true });
    if (intended) {
      return;
    } else {
      if (loggedInUser && loggedInUser.token) {
        navigate("/");
      }
    }
  }, [loggedInUser, navigate]);

  //function to generate random ID for user
  const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  };

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const user1 = result.user;
        const idTokenResult = await user1.getIdToken(); //unique token of particular user

        //to store user data in db
        await db
          .collection("users")
          .doc(user1.email)
          .get()
          .then(async (doc) => {
            if (doc.exists) {
              separatedString = doc.data();
              console.log("User Already there -> ", separatedString);
            } else {
              const userId = generateRandomId();
              await db
                .collection("users")
                .doc(user1.email)
                .set({
                  id: userId,
                  name: user1.email.split("@")[0],
                  email: user1.email,
                  role: ["buyer"],
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .then(() => {
            alert("successfully login");
          });

        //checking user data and dispatch(Store) in redux
        await db
          .collection("users")
          .doc(user1.email)
          .get()
          .then(async (doc) => {
            if (doc.exists) {
              var separatedString1 = doc.data();
            }
            dispatch({
              type: "LOGGED_IN_USER2",
              payload: {
                name: separatedString1.email.split("@")[0],
                email: separatedString1.email,
                token: idTokenResult,
                role: await separatedString1.role,
                id: separatedString1.id,
              },
            });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    {/* <div className="container">
      <h1>Login here</h1>
      <div className="box">
        <GoogleButton
          type="dark"
          className="wpcf7-form-control has-spinner wpcf7-submit"
          style={{ width: "100%" }}
          onClick={handleGoogleSignIn}
          />
      </div>
    </div> */}
    <section>
  <div className="colour" />
  <div className="box">
    <div className="left-container">
      <h1>
        Get anything
        <br />
        you want.
      </h1>
    </div>
    <div className="right-container">
      <form className="form">
        <div className="inputbox">
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Enter your Password" />
        </div>
        <div className="inputbox">
          <input type="submit" defaultValue="Login" />
        </div>
        <p className="forget">
          Forgot password? <a href="#"> Click here</a>
        </p>
        <p className="option">Or else sign in with</p>
        <div className="container">
      <div className="box">
        <GoogleButton
          type="dark"
          className="wpcf7-form-control has-spinner wpcf7-submit"
          style={{ width: "100%" }}
          onClick={handleGoogleSignIn}
          />
      </div>
    </div>
      </form>
    </div>
  </div>
</section>

          </>
    
  );
};

export default Login;
