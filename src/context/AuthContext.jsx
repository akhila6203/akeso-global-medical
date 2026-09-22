import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("akeso-user");

    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "akeso-user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("akeso-user");
    }
  }, [user]);

  const login = async ({ email }) => {
    // TODO: replace with backend API later.
    const demoUser = {
      id: 1,
      name: "Akeso Patient",
      email,
    };

    setUser(demoUser);

    return demoUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}