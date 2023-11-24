import "./Home.css"
import placeholder from "../../imgs/placeholder.png"


export default function Home() {
    return (
        <div className="home">

            <h1 className="aligntitle">Dê uma cara nova a você!</h1><br />
            <h1 className="aligntitle">O que você está procurando hoje?</h1> <br />


            <div className="aligncard">
                <div className="container-fluid container-sm">
                    <div className="row">

                        <div className="col ">

                            <div className="card bg-dark" >
                                <img className="card-img-top" src={placeholder}  href="/RC" alt="" />
                                <div className="card-body">
                                    <a role="button" className="btn btn-lg btn-primary text-light" href="/RC">Que tal algo Casual?</a>
                                </div>
                            </div>

                        </div>


                        <div className="col">

                            <div className="card bg-dark" >
                                <img className="card-img-top" src={placeholder}  href="/RF" alt="" />
                                <div className="card-body">
                                    <a href="/RF" role="button" className="btn btn-lg btn-primary text-light" >Ou algo mais Formal?</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <br /> <br /> <br />
            
            <div className="aligntitle">
            <iframe className="infoimg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.337608019845!2d-49.08929326693312!3d-22.322101749732358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67984ef06eb3%3A0x83b97cd89092ade3!2sLoja%20TIM%20-%20Bauru%20Batista%20de%20Carvalho!5e0!3m2!1spt-BR!2sbr!4v1700791531400!5m2!1spt-BR!2sbr" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /><br />
            <p className="info">Loja sob-reforma</p>
            <a>Encontrou algum erro ou gostaria de enviar alguma recomendação?</a>
            <a href="/contato"> Contate-nos</a>
            </div> 
            <br/><br/><br/>
        </div>
    )
}