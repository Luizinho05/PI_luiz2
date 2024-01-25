import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import CasualFeminina1 from '../../imgs/regata-branca-feminina.jpg'
import CasualFeminina2 from '../../imgs/casualF2.jpg'
import CasualFeminina3 from '../../imgs/casualF3.png'
import CasualMascuilino1 from '../../imgs/regatas-casual-masculino.jpg'
import CasualMasculino2 from '../../imgs/casualM2.jpg'
import FormalFeminino1 from '../../imgs/formalF1.png'
import FormalFeminino2 from '../../imgs/formalF2.png'
import FormalFeminino3 from '../../imgs/formalF3.png'
import FormalMasculino1 from '../../imgs/formalM1.png'
import FormalMasculino2 from '../../imgs/formalM2.png'
import FormalMasculino3 from '../../imgs/formalM3.png'

export default function Home() {
    return (
        <div>
            <div className="home">
                <p className="aligntitle">Seja bem-vindo a Loja Virtual !</p>
                <p className="aligntitle">O que você está procurando hoje?</p> <br />

                <Carousel data-bs-theme="transparent">
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={CasualFeminina1}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={CasualFeminina2}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={CasualFeminina3}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={CasualMascuilino1}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={CasualMasculino2}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalFeminino1}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalFeminino2}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalFeminino3}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalMasculino1}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalMasculino2}
                            alt='img'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imagens"
                            src={FormalMasculino3}
                            alt='img'
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <br /><br /><br />
            <div className="aligntitle home">
                <iframe className="infoimg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.337608019845!2d-49.08929326693312!3d-22.322101749732358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67984ef06eb3%3A0x83b97cd89092ade3!2sLoja%20TIM%20-%20Bauru%20Batista%20de%20Carvalho!5e0!3m2!1spt-BR!2sbr!4v1700791531400!5m2!1spt-BR!2sbr" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /><br />
                <p className="info">Loja sob-reforma</p>
            </div>

        </div>
    )
}