
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <>
            <header className="container">
                <NavLink to="/GitHub" activeClassName="active">
                    <h2>Popular</h2>
                </NavLink>
                <NavLink to="/Battle" activeClassName="active">
                    <h2 className="battle-margin">Battle</h2>
                </NavLink>
            </header>

        </>
    )
}

export default Header;