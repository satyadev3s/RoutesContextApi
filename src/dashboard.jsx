import react from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Dashboard() {
    const { name } = useParams();

    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>Welcome, {name}!</p>
            <Outlet />
        </div>
    );
}
export default Dashboard;