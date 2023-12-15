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
                <img src={instagram} alt="IMG" style={{width: 100}}/><p>Instagram :<a href='https://www.instagram.com/luiz_henriqueofc01?igshid=OGQ5ZDc2ODk2ZA=='>@LojaVistase</a></p><br />
                <img src={email} alt="IMG" style={{width: 80}}/><p>E-mail :Vistase@gmail.com</p><br />
                <img src={zapzap} alt="IMG" style={{width: 50}}/><p>Whatsapp :<a href=' https://wa.me/5514988225887'>(14)98822-5887</a></p>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/><br/>
            </div>

        </div>
    )
}