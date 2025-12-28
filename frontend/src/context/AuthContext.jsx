import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "app.users";
const SESSION_KEY = "app.session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  const signup = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    if (users.find((u) => u.email === email)) {
      throw new Error("Email already registered");
    }

    const newUser = {
      id: Date.now(),
      email,
      password: btoa(password),
    };

    const next = [...users, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(next));

    const session = { id: newUser.id, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));

    setUser(session);
  };

  const login = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    const found = users.find(
      (u) => u.email === email && u.password === btoa(password)
    );

    if (!found) throw new Error("Invalid credentials");

    const session = { id: found.id, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));

    setUser(session);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
