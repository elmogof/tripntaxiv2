import logo from '../media/logo.png'
import Navigation from '../components/Navigation'

const Mantenimiento = () => {

  return (
    <>
      <Navigation url={''} />
      <div className="mantenimiento-container bg-tnt-green px-0 py-4 py-lg-5 mt-5">
        <img className='img-fluid mx-auto' src={logo} alt='Trip n Taxi Logo' />
        <h1 className='text-center'>Página en mantenimiento</h1>
      </div>
    </>
  )
}

export default Mantenimiento