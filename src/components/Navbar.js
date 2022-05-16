import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";


const NavBar = () => {
    return ( 
        <div className="navbar">
            <h1>Tienda AYI</h1>
            <SearchBar />
            <NavLinks />
        </div>
    )
}

export default NavBar;