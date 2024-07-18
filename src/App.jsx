
import './index.css'
import Header from './Header'
import Card from './Card'
import About from './about'
import Footer from './Suscriber'
import Last from './bottom-nav'

function App() {


  return (

    <>

      <Header />

      <section id='articles'>
        <Card/>
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='footer'>
        <Footer/>
      </section>

      <section id='last'>
        <Last/>
      </section>

    </>

  )
}

export default App
