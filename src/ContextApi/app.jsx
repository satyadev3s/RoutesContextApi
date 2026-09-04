import UserProvider from "./usercontext";
import Profile from "./profile";

export default function ContextApiApp() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}
