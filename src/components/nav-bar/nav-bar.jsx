import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/'}>Home</Link>
        </>
    )
}