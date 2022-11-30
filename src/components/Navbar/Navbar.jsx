import { NavLink } from 'react-router-dom';
import './Navbar.module.css';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
    <nav className={classes.navbar}>
        <div className={classes.item}> <NavLink activeClassName= {classes.activeLink} to='/profile'> Profile </NavLink></div>
        <div className={classes.item}> <NavLink activeClassName = { navData => navData.isActive ? classes.active : classes.item } to='/dialogs'> Messages </NavLink></div>
        <div className={classes.item}> <NavLink to='/News'> News </NavLink></div>
        <div className={classes.item}> <NavLink to='/Community'> Community  </NavLink></div>
        <div className={classes.item}> <NavLink to='Settings'> Settings </NavLink></div>

        <br></br>
      </nav>)
}
export default Navbar;