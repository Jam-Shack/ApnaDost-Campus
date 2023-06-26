import React, { useState } from 'react'
import { db, auth } from '../../FirebaseConfig'
// import firebase from 'firebase'
import { useSelector } from "react-redux";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';


// { scroll }
function SendMessage({ scroll }) {

    const { loggedInUser } = useSelector((state) => ({ ...state }));

    const [msg, setMsg] = useState('')

    var productSellerEmail = "harshchotaliya269@gmail.com";
// harshchotaliya2624@gmail.com
// harshchotaliya269@gmail.com
// harsh.gc@somaiya.edu
    
    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        // const generateRandomNumber = () => {
        //     const min = 1000; // Minimum 4-digit number
        //     const max = 9999; // Maximum 4-digit number
          
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        // };


        // const rn = generateRandomNumber(); 
        // const subCollectionId = 'emailIdHere'+rn;
        const subCollectionData = {
            text: msg,
            photoURL,
            senderEmail: loggedInUser.email,
            receiverEmail: productSellerEmail,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        try {

            //store in self Id
            const usersRef1 = db.collection("users");
            const userDocRef1 = usersRef1.doc(loggedInUser.email);
            const firstSubcollectionRef1 = userDocRef1.collection("messages").doc();
            await firstSubcollectionRef1.set(subCollectionData);

            //store in oppposite id
            const usersRef = db.collection("users");
            const userDocRef = usersRef.doc(productSellerEmail);
            const firstSubcollectionRef = userDocRef.collection("messages").doc();
            await firstSubcollectionRef.set(subCollectionData);

            
            // ******************************************
            //Nested sub collection starts for self
            // const usersRef = db.collection("users");
            // const userDocRef = usersRef.doc("harshchotaliya269@gmail.com");
            // const firstSubcollectionRef = userDocRef.collection("messages").doc;
            // const secondSubcollectionRef = firstSubcollectionRef.doc(loggedInUser.email).collection("private-messages").doc();
            // // const thirdSubcollectionRef = secondSubcollectionRef.doc(rn);

            // await secondSubcollectionRef.set(subCollectionData);
            //End here
            // **************************************

            // ******************************************
            //Nested sub collection starts for Opposite (Friend)
            // var friedEmail = 
            // const usersRef1 = db.collection("users");
            // const userDocRef1 = usersRef1.doc("harshchotaliya269@gmail.com");
            // const firstSubcollectionRef1 = userDocRef1.collection("messages");
            // const secondSubcollectionRef1 = firstSubcollectionRef1.doc(loggedInUser.email).collection("private-messages").doc();
            // // const thirdSubcollectionRef = secondSubcollectionRef.doc(rn);

            // await secondSubcollectionRef1.set(subCollectionData);
            //End here
            // **************************************

        
            console.log('++++++++++++++++++Sub-collection added successfully!');
          } catch (error) {
            console.error('+++++++++++++++Error adding sub-collection:', error);
        }
    //     // **************************************

        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px', padding:'15px' }} placeholder='Message...' type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '150px'}} type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
