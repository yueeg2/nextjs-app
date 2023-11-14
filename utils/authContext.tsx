import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }