import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
<nav className='navbar'>
    <NavLink exact to="/">Главная</NavLink>
    <NavLink to="/todoList">ToDo</NavLink>
</nav>
    )
}

export default NavBar;