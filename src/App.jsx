import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Formtarea from "./components/Formtarea";

function App() {

  return (
    <>
    <main className='container-fluid'>

      <h1 className='text-center'>Lista de tareas</h1>
      <hr />
      <h3>Ingresá tus tareas</h3>
      <br />
      <section>
        <Formtarea></Formtarea>        
      </section>
      <footer className='mt-3'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </main>
    </>
    
  )
}

export default App
