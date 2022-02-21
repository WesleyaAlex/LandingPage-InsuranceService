import PlaceOfImg from '../../assets/images/testimonials1.svg'
import SetForImg from '../../assets/images/testimonials2.svg'
import SatisfactionImg from '../../assets/images/testimonials3.svg'
import StarsImg from '../../assets/images/testimonials-stars.svg'
import './styles.css'

function Testimonials() {
    return (
        <div className="container-testimonials animation-scroll" id="testimonials">
            <div>
                <h1>Industry</h1>
                <p>Problems trying to resolve the conflict between</p>
                <p>the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="testimonials">
                    <div>
                        <img src={PlaceOfImg} alt="" />
                        <div className='testimonials-info'>
                            <span>Slate helps you see how </span>
                            <span>many more days you need</span>
                            <span>to work to reach your financial</span>
                            <span>goal for the month and year.</span>
                        </div>
                        <div>
                            <img src={StarsImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={SetForImg} alt="" />
                        <div className='testimonials-info'>
                            <span>Slate helps you see how </span>
                            <span>many more days you need</span>
                            <span>to work to reach your financial</span>
                            <span>goal for the month and year.</span>
                        </div>
                        <div>
                            <img src={StarsImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={SatisfactionImg} alt="" />
                        <div className='testimonials-info'>
                            <span>Slate helps you see how </span>
                            <span>many more days you need</span>
                            <span>to work to reach your financial</span>
                            <span>goal for the month and year.</span>
                        </div>
                        <div>
                            <img src={StarsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials