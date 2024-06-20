import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            
            <h1>Hello from Home.</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Service">Service</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/user">Users</Link>
                </li>
            </ul>
            {
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;