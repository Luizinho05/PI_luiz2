import "./contato.css"
import zapzap from "../../imgs/zapzap.png"
import instagram from "../../imgs/instagram.png"
import email from "../../imgs/gmail.png"

export default function Contato() {
    return (
        <div>

            <div>
                <h1 className="titleAlign">Contatos</h1>
            </div>

            <br />

            <div className="textAlign">
                <img src={instagram} alt="IMG" style={{width: 100}} /> <a>Instagram : @LojaVistase</a> <br />
                <img src={email} alt="IMG" style={{width: 80}} /> <a>E-mail : Vistase@gmail.com</a> <br />
                <img src={zapzap} alt="IMG" style={{width: 50}} /> <a>Whatsapp : (14)5555-3438</a>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/><br/>
            </div>

        </div>
    )
}