import { createContext, useState } from "react";
export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState("Srinu");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
