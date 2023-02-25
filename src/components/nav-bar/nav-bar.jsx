import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <Link to={'/login'}>
                Login
            </Link>
        </>
    )
}