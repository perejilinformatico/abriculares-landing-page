import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
    const [mostrar, setMostrar] = useState<boolean>(false);  
  useEffect (() => {
      console.log(mostrar)
    }, [mostrar]);
    const comprar = () => {
    
    setMostrar(true);
    console.log(mostrar)
    setTimeout(() => {
      setMostrar(false);
      console.log(mostrar)
    }, 3000);
  };
  function handleClick() {
       window.location.href = "#auriculares";
  }
  function clickHander() {
       comprar();
       fetch('https://api-beta-eight-97.vercel.app/api/data', {
         method: "POST",
          headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({ username: "Pedido" }),
        }
       )
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className='d-flex justify-content-center align-items-center'>
          <div>
           <h1 className='display-5'>Los <br /> Mejores <br /> Abriculares</h1>
           <p>Sonido premium que te transporta. <br />Diseño que define tu estilo.<br /> Tecnología que simplemente funciona.</p>
           <button className='btn btn-outline-dark mt-2' onClick={handleClick}>Comprar</button>
          </div>
          <img src='/image.png' alt='Auriculares' width={"700px"} />
        </div>
      </div>
      <div className="container py-5 gap-3" id='auriculares'>
  <h2 className="text-center display-5 mb-5">Nuestros Productos</h2>

  <div className="row g-4">

    {/* CARD 1 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0">
        <img src="/image.png" className="card-img-top" alt="Auriculares" />
        <div className="card-body text-center">
          <h5 className="card-title">Auriculares Pro</h5>
          <p className="card-text text-muted">
            Sonido envolvente y cancelación de ruido.
          </p>
          <button className="btn btn-dark mi-btn">Comprar</button>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0">
        <img src="/image.png" className="card-img-top" alt="Auriculares" />
        <div className="card-body text-center">
          <h5 className="card-title">Auriculares Lite</h5>
          <p className="card-text text-muted">
            Livianos, cómodos y con gran batería.
          </p>
          <button className="btn btn-dark mi-btn">Comprar</button>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0">
        <img src="/image.png" className="card-img-top" alt="Auriculares" />
        <div className="card-body text-center">
          <h5 className="card-title">Auriculares Max</h5>
          <p className="card-text text-muted">
            Diseño premium con audio de alta fidelidad.
          </p>
          <button className="btn btn-dark mi-btn">Comprar</button>
        </div>
      </div>
    </div>

  </div>
</div>
<div className='text-center py-5 d-flex justify-content-center align-items-center flex-column'>
  <h1 className='display-5'>$2.99</h1>
  <img src='/image.png' alt='Imagen' />
  <button className='btn btn-dark mi-btn w-25' onClick={() => {clickHander(); comprar();}}>Comprar</button>
</div>
<footer className="bg-dark text-white text-center py-4">
  <div className="container">
    <p className="mb-1">© 2026 Auriculares Store</p>

    <div className="mb-2">
      <a href="#" className="text-white me-3">Inicio</a>
      <a href="#" className="text-white me-3">Productos</a>
      <a href="#" className="text-white">Contacto</a>
    </div>

    <small className="text-secondary">
      Hecho con 💻 y buen sonido 🎧
    </small>
  </div>
</footer>
{mostrar && (
  <div className="alert alert-success position-fixed top-0 end-0 m-3" style={{ 
    animation: "animacion 3s ease-in-out"
    }}
    >
    Compra enviada, te avisaremos pronto!!
  </div>
)}
    </> 
  )
}

export default App
