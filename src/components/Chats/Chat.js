import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../FirebaseConfig'
import SendMessage from './SendMessage'
import { useSelector } from "react-redux";
// import "./chatAllPage.css"


function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    // useEffect(() => {
    //     db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //         setMessages(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])

    // *********************************
    const { loggedInUser } = useSelector((state) => ({ ...state }));

    const [subCollectionData, setSubCollectionData] = useState([]);
    var data;
    var filteredUsers;

    var senderEmail;
    var receiverEmail;


   
    
    const [data1, setData1] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const subcollectionRef = db.collection('users').doc(loggedInUser.email).collection('messages');
          const snapshot = await subcollectionRef.get();
          const fetchedData = snapshot.docs.map(doc => doc.data());
          setData1(fetchedData);
        } catch (error) {
          console.error('Error fetching subcollection:', error);
        }
      };
        fetchData();
    }, []);
    
    
    // console.log("00000000000000000000000000000000000000000",data1);
    // console.log("&&&&&&&&&&&&&&&&&&", data1);
    // const chechEmail = (data1) => { 
    //         senderEmail = loggedInUser.email;
    //         receiverEmail = "harshchotaliya269@gmail.com"
    //         filteredUsers = data1.filter((user) => user.senderEmail===senderEmail && user.receiverEmail===receiverEmail);
    //         console.log("********************************", filteredUsers)
    //     }


















    // useEffect(() => {
    //     const fetchSubCollectionData = async () => {
     
    //         // const querySnapshot = await db
    //         //   .collection('users')
    //         //   .doc(loggedInUser.email)
    //         //   .collection('messages')
    //         //   .doc('harsh.gc@269')
    //         //   .collection('private-messages')
    //         //   .orderBy('createdAt')
    //         //   .get();

    //        const querySnapshot = await db
    //           .collection('users')
    //           .doc(loggedInUser.email)
    //           .collection('messages')
    //           .orderBy('createdAt')
    //           .get();
            
    //         data = querySnapshot.docs.map((doc) => doc.data());
    //         // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&",data)
    //         setSubCollectionData(data);
    //         chechEmail(data);
    //     };
    //     fetchSubCollectionData();       
    // }, []);
      
    // *********************************
    
// "harsh.gc@somaiya.edu" 
//    " harshchotaliya2624@gmail.com"

    const chechEmail = (data1) => {
        console.log(data)
        if (data1) {
            senderEmail = loggedInUser.email;
            receiverEmail = "harshchotaliya269@gmail.com"
            filteredUsers = data1.filter((user) => user.senderEmail === senderEmail && user.receiverEmail === receiverEmail || 
                                                   user.senderEmail === receiverEmail && user.receiverEmail === senderEmail);
        }
    }
    
    chechEmail(data1);
    console.log("filteredUsers*******************", filteredUsers);
    return (
        <div className='chatContainer'>
            <div className='chatHeading'>
                <h2>Harsh Chotaliya</h2>
            </div>
            <div className="msgs">
                {filteredUsers.map(({ id, text, photoURL, uid }) => (
                    <div>
                            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt="" />
                            <p>{text}</p> 
                            </div>
                        </div>
                    
                ))}
            </div>

            {/* <div>
                {data1.map(item => (
                    <div key={item.id}>
                    {item.text}
                    </div>
                ))}
            </div> */}


            {/* <div>
            {filteredUsers && filteredUsers.map(user => (
                <div key={user.id}>
                <h2>{user.text}</h2>
                <p>{user.email}</p>
                </div>
            ))}
            </div> */}


           
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
        //
    )
}

export default Chat
