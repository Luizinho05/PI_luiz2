import LOGO from "../../imgs/logo.png"
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div class="container-xs">
            <nav class="navbar navbar-dark bg-dark">
               <a className='navbar-brand' href='/Login'>Login</a>
                <Link to='/'><p class="navbar-brand vistase">VISTA-SE!<img src={LOGO} alt="LOGO" style={{width: 50, height: 60}}/></p></Link>
            </nav>
        </div>
    )
}