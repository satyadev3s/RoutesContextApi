import { useParams } from "react-router-dom";

export default function User() {
    const { name } = useParams();

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome, {name} good morning how can i help you macha !</p>
        </div>
    );
}