// import './App.css';
// import Chat from './components/';
import Chat from './Chat';
import SignIn from './SignIn';
import { auth } from '../../FirebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
