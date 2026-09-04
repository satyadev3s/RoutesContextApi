import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    function gotouser() {
        navigate(`/user/${name}`);
    }
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our home page!</p>
            <div className="home-form">
                <input type="text" placeholder="Enter your name" id="name" 
                onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <button onClick={gotouser}>Proceed</button>
            </div>
        </div>
    );
}