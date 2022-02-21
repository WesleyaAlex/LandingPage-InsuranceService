import { useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Connect from './components/Connect'

function App() {
  useEffect(() => {
    const components = document.querySelectorAll('.animation-scroll')

    const componentsAnimation = () => {
      const windowTop = window.pageYOffset + window.innerHeight + 0.85

      components.forEach(component => {
        if (windowTop > component.offsetTop + 50) {
          component.classList.add('animate')
        }
      })
    }

    componentsAnimation()

    window.addEventListener('scroll', () => componentsAnimation())
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Connect />
    </>
  );
}

export default App;