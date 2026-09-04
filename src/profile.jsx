import react from "react";
import {Outlet} from "react-router-dom";
import {useParams} from "react-router-dom";
export default function Profile() {
    const {name} = useParams();

    return (
        <div>
            <h1> Profile Page</h1>
            <p>Welcome, {name}!</p>
            <Outlet />
        </div>
    );
}