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
            <iframe className="infoimg" src="https://www.google.com/maps/@-22.3227398,-49.0731186,3a,75y,194.38h,86.31t/data=!3m6!1e1!3m4!1sOl_fj7z160r-p6iukKwBdA!2e0!7i13312!8i6656?hl=pt-BR&entry=ttu" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /><br />
            <p className="info">Loja sob-reforma</p>
            <a>Encontrou algum erro ou gostaria de enviar alguma recomendação?</a>
            <a href="/contato"> Contate-nos</a>
            </div> 
            <br/><br/><br/>
        </div>
    )
}