import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../../FirebaseConfig";
import SendMessage from "./SendMessage";
import { useSelector } from "react-redux";

function Chat({ userEmail }) {
  console.log(userEmail);
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  const { loggedInUser } = useSelector((state) => ({ ...state }));

  const [subCollectionData, setSubCollectionData] = useState([]);
  var data;
  var filteredUsers;

  var senderEmail;
  var receiverEmail;

  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("Data1  ",data1);
  }, []);

  const fetchData = async () => {
    try {
      const subcollectionRef = db
        .collection("users")
        .doc(loggedInUser.email)
        .collection("messages");
      const snapshot = await subcollectionRef.get();
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData1(fetchedData);
    } catch (error) {
      console.error("Error fetching subcollection:", error);
    }
  };
  
  const chechEmail = (data1) => {
    console.log(data);
    if (data1) {
      senderEmail = loggedInUser.email;
      receiverEmail = userEmail;
      filteredUsers = data1.filter(
        (user) =>
          (user.senderEmail === senderEmail &&
            user.receiverEmail === receiverEmail) ||
          (user.senderEmail === receiverEmail &&
            user.receiverEmail === senderEmail)
      );
    }
  };

  chechEmail(data1);
  console.log("filteredUsers*******************", filteredUsers);
  return (
    <div className="chatContainer">
      <div className="chatHeading">
        <h2>{userEmail}</h2>
      </div>
      <div className="msgs">
        {filteredUsers.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage userEmail={userEmail} scroll={scroll} />
      <div ref={scroll}></div>
    </div>
    //
  );
}

export default Chat;
