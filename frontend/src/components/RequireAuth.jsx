import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Login na thakle /dashboard-e dhukte gele shorasori home-e "redirect" kore dey
function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default RequireAuth;