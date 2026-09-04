import { useContext } from "react";
import { UserContext } from "./usercontext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="context-api-profile">
      <h1>Current user: {user}</h1>
      <button onClick={() => setUser(user === "Srinu" ? "Rahul" : "Srinu")}>
        Change User
      </button>
    </div>
  );
}
