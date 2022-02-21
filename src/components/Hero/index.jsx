import Arrow from '../../assets/images/arrow-home.svg'
import CollapseBlue from '../../assets/images/collapse-img1.svg'
import CollapseWhite from '../../assets/images/collapse-img2.svg'
import Menu from '../Menu'
import './styles.css'

function Hero() {
    return (
        <div className='home' id="home">
            <div className="home-background">
                <header>
                    <div className="nav-logo">
                        <h3>BrandName</h3>
                        <nav>
                            <a href="#home">Home</a>
                            <a href="#features">Features</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#connect">Connect</a>
                        </nav>
                    </div>
                    <div className="div-login">
                        <a href="#">Login</a>
                        <button type='button'>Become a member <img src={Arrow} alt="arrow" /></button>
                    </div>
                    <Menu />
                </header>

                <div className='home-infos'>
                    <h2>We Ensure A Best</h2>
                    <h2>Insurance Service</h2>
                    <p>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <div className='div-buttons'>
                        <button type='button'>Get Quote Now</button>
                        <button type='button'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="home-collapses">
                <div>
                    <img src={CollapseBlue} alt="" />
                    <h2>Peace of Mind</h2>
                    <span>the quick fox jumps over the lazy dog</span>
                </div>
                <div>
                    <img src={CollapseBlue} alt="" />
                    <h2>Set For Life</h2>
                    <span>the quick fox jumps over the lazy dog</span>
                </div>
                <div className='collapse-blue'>
                    <img src={CollapseWhite} alt="" />
                    <h2>100% Satisfaction</h2>
                    <span>the quick fox jumps over the lazy dog</span>
                </div>
            </div>
        </div>
    )
}

export default Hero