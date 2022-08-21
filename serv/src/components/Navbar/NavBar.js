
import { Outlet, Link } from "react-router-dom";
import { auth } from "../../firebase";
import './NavBar.css'

function NavBar() {
    return (
    <>
        <div id="wrapper">       
            <nav>
                <ul className='n-list'>
                    <li className='n-item'>
                        <Link to={localStorage.getItem('teacher') ? '/thome': '/shome'}>home</Link>
                    </li>
                    <li className='n-item'>
                        <Link to='/settings'>settings</Link>
                    </li>
                    <li className='n-item'>
                        <Link to='/tutorial'>help</Link>
                    </li>
                </ul>
            </nav>
            <div id="outlet">
                <Outlet />
            </div>
            <footer>
                <p>Serv is a project created by Mujtaba Raja, Christofer Flores, Prakshab Adhikari, and Lakshya Dhakar.</p>
                <p>This project was created with React.js, Node.js, HTML, and CSS.</p>
            </footer>
        </div>
    </>
    )
}

export default NavBar;