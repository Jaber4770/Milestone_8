import Link from "../../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
    ];

    const [open, setOpen] = useState(false);


    return (
        <div className="text-2xl relative py-10 z-10">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open ? <IoMdClose /> : <RiMenu2Line />
                }
            </div>
            <ul className={`md:flex bg-[#24303d] text-black px-4 py-3 rounded-lg duration-500 md:justify-center md:static absolute ${open ? 'top-16' : '-top-96'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;