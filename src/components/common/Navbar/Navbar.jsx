import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    //crea una referencia


    return (
        <>
            <header>
                <nav className="navbar bg-base-100">
                    <div className="flex-1">
                        <h2 className="">Frontender.itacademy</h2>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'active' : 'navbarLink')}
                                >
                                    Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calculadora"
                                    className={({ isActive }) => (isActive ? 'active' : 'navbarLink')}
                                >
                                    Calculadora
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <button></button>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
