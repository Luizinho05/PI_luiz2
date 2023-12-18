import { Link } from 'react-router-dom'
import { TbMenu } from "react-icons/tb";
import LOGO from "../../imgs/logo.png"
import './header.css'

export default function Header() {

    return (
        <div class="container-xs">
            <div class="navbar bg-dark">
                <TbMenu className='burguer' />
                <Link to='/'><p class="vistase">VISTA-SE!<img src={LOGO} alt="LOGO" style={{ width: 50, height: 60 }} /></p></Link>
                <Link to='/Login'>Login</Link>
            </div>
        </div>
    )
}