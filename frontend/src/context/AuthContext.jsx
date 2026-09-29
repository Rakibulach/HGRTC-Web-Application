import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Backend/JWT ekhono paused — tai ekhon "login" mane email dile-i accept kora hoy।
// Real backend ashle, shudhu login()-er bhitorer logic ekta real API call diye
// replace hobe — Navbar/Dashboard-e kono change lagbe na.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('hgrtc_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('hgrtc_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('hgrtc_user');
    }
  }, [user]);

  function login(email) {
    const raw = email.split('@')[0].replace(/[.\-_]/g, ' ');
    const name = raw.charAt(0).toUpperCase() + raw.slice(1);
    setUser({ name, email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}