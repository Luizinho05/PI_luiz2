import formalM1 from "../../../imgs/formalM1.png"
import formalM2 from "../../../imgs/formalM2.png"
import formalM3 from "../../../imgs/formalM3.png"

import formalF1 from "../../../imgs/formalF1.png"
import formalF2 from "../../../imgs/formalF2.png"
import formalF3 from "../../../imgs/formalF3.png"


export default function RoupaFormal() {
    return (
        <>

            <div className="aligntitle">
                <h1>Formal</h1>
            </div>

            <div className="container-xxl">

                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalM1} alt="img1" style={{ width: 300 }} />
                    </div>

                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalM2} alt="img2" style={{ width: 300 }} />
                    </div>

                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalM3} alt="img3" style={{ width: 300 }} />
                    </div>
                </div>

                <br />

                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalF1} alt="img4" style={{ width: 300 }} />
                    </div>

                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalF2} alt="img5" style={{ width: 300 }} />
                    </div>

                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail" src={formalF3} alt="img6" style={{ width: 300 }} />
                    </div>
                </div>

            </div>

        </>
    )
}