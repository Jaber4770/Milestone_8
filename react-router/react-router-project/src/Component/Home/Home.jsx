import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import { DataContext } from "../../main";




const Home = () => {
    const data = useContext(DataContext);
    return (
        <div>

            <h1>Hello from Home.</h1>
            <p>Data from Context API: {data}</p>

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
                    <li>
                        <NavLink to="/form">Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statefulForm">Stateful Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formref'>Ref Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hookform'>Hook Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/reuseableformSignUP'>Reuseable Form Sign UP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/reuseableformLogin'>Reuseable Form Log in</NavLink>
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