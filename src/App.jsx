import Navbar from './components/nav'
import Hero from './components/Hero'
import Footer from './components/footer'
import Form from './components/form'
import Servicios from './components/Servicios'
import Experiencias from './components/Experiencias'
import './App.css'


const App = () => {

  return (
    <div 
      className="relative bg-gradient-to-b from-[#ff6fdd] to-[#f8dbf3] deg:45" 
    >
      <div className='m-0 flex flex-col'>      
        <div className='fixed top-0 z-50 w-full border-b-1 border-pink-200 bg-fuchsia-300 ' >
          <Navbar />
        </div>
        <div className='h-screen flex items-center justify-center ' style={{ backgroundImage: "url('bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9 }}>
          <Hero />
        </div>
        <div className='h-screen items-center justify-center'>
          <Experiencias />
        </div>
        <div className='h-screen flex items-center justify-center'>
          <Servicios />
        </div>
        <div className='h-screen flex items-center justify-center'> 
          <Form />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

