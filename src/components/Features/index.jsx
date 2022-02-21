import PlaceOfImg from '../../assets/images/feature1.svg'
import SetForImg from '../../assets/images/feature2.svg'
import SatisfactionImg from '../../assets/images/feature3.svg'
import './styles.css'

function Features() {
    return (
        <div className="container-features animation-scroll" id="features">
            <div className="features">
                <div>
                    <img src={PlaceOfImg} alt="" />
                    <h2>Peace of Mind</h2>
                    <p>
                        <span>So it really behaves like neither.</span>
                        <span>Now we have given up.</span>
                    </p>
                </div>
                <div>
                    <img src={SetForImg} alt="" />
                    <h2>Set For Life</h2>
                    <p>
                        <span>They were used to create the</span>
                        <span>machines that launched</span>
                    </p>
                </div>
                <div>
                    <img src={SatisfactionImg} alt="" />
                    <h2>100% Satisfaction</h2>
                    <p>
                        <span>So it really behaves like neither</span>
                        <span>Now we have given up.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features