import { Link } from 'react-router-dom'
import { TbMenu } from "react-icons/tb";
import LOGO from "../../imgs/logo.png"
import './header.css'

export default function Header() {
    
    return (
        <div class="container-xs">
            <div class="navbar bg-dark">
                <div className='dropdown'>
                    <button className='dropbtn'><TbMenu className='burguer' /></button>
                    <div className='dropdown-content'>
                    <Link to='/LoginCliente'>Login Cliente</Link>
                    <Link to='/Login'>Login Funcionário</Link>
                    </div>
                </div>
                <Link to='/'><p class="vistase">VISTA-SE!<img src={LOGO} alt="LOGO" style={{ width: 50, height: 60 }} /></p></Link>
            </div>
        </div>
    )
}