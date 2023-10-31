import './NavLinks.css'

const NavLinks=props=>{

    return <ul className="nav-links">
        <li>
            <NavLinks to="/" exact> All Users</NavLinks>
        </li>
        <li>
            <NavLinks to="/u1/places"> All Places</NavLinks>
        </li>
        <li>
            <NavLinks to="/places/new"> Add Places</NavLinks>
        </li>
        <li>
            <NavLinks to="/auth"> Authenticate</NavLinks>
        </li>
    </ul>
};

export default NavLinks;