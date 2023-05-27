import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Formtarea from "./components/Formtarea";
import Itemtarea from './components/Itemtarea';

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
        <br />
        <Itemtarea></Itemtarea>
      </section>
      <footer>
        <p>Todos los derechos reservados &</p>
      </footer>
    </main>
    </>
    
  )
}

export default App
