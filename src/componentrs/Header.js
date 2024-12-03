import react from 'react';
import './all.css';
const Header = () => {
    return(
        <header className="header">
            <h1 className="head1">Elkhatib</h1>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}
export default Header;