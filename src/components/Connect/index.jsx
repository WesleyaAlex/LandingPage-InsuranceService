import './styles.css'

function Connect() {
    return (
        <div className='connect animation-scroll' id='connect'>
            <div>
                <div className='div-left'>
                    <span>Subscribe For Latest</span>
                    <span>Newsletter</span>
                </div>
                <div className='div-right'>
                    <input type="text" placeholder='Your Email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Connect