import "./Footer.scss"
import zapzap from '../../imgs/whats.png'
import instagram from '../../imgs/instagram.png'
import email from '../../imgs/gmail.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className='nomeProjeto'>
                <h3 className='h3'>Projeto Integrador - 2023</h3>
                <h5>Fernando Mendes, Luiz Simionato, Renan de Britto</h5>
                <div className="Contato">
                <div><a href='https://www.instagram.com/luiz_henriqueofc01?igshid=OGQ5ZDc2ODk2ZA=='><img className='insta' src={instagram} alt='img' style={{ width: 50 }} /></a></div>
                <div className='zap'><img src={email} alt='img' style={{ width: 50 }} /><p>vistase@gmail.com</p></div>
                <div className><a href=' https://wa.me/5514988225887'><img className='insta' src={zapzap} alt='img' style={{ width: 30 }} /></a></div>
                </div>
            </div>
        </div>
    )
}