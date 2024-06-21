import { NavLink, Outlet } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <div>

            <h1>Hello from Home.</h1>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
            {
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;