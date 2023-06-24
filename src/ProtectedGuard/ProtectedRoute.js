import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    
    const { loggedInUser } = useSelector((state) => ({ ...state }));
    if (!loggedInUser || loggedInUser.role.indexOf("seller") === -1) {
        return <Navigate to="/" />;
      }

  return children
}

export default ProtectedRoute