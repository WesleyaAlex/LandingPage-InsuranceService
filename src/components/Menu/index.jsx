import { useState } from 'react'
import './styles.css'

function Menu() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className={`menu-hamburguer ${openMenu && 'active'}`} onClick={() => setOpenMenu(!openMenu)}>
                <div className='div1'></div>
                <div className='div2'></div>
                <div className='div3'></div>
            </div>
            <aside className={`aside ${openMenu && 'active'}`}>
                <a href="/#home" onClick={() => setOpenMenu(!openMenu)}>Home</a>
                <a href="/#features" onClick={() => setOpenMenu(!openMenu)}>Features</a>
                <a href="/#testimonials" onClick={() => setOpenMenu(!openMenu)}>Testimonials</a>
                <a href="/#connect" onClick={() => setOpenMenu(!openMenu)}>Connect</a>
            </aside>
        </>
    )
}

export default Menu