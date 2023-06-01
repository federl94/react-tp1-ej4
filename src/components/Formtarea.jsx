import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListaTareas from "./Listatareas";


const formTarea = () => {
  const tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasDelLocalStorage);

  useEffect(()=> {
    localStorage.setItem('listaTareas', JSON.stringify(tareas))    
  }, [tareas])

  const btnEnviar = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  }
  const handleChange = (e) => {
    setTarea(e.target.value);
  }
  const borrarTarea = (nombreTarea) => {
    let copiaListaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea);
    setTareas(copiaListaTareas);
  }
  return (
    <>
      <Form onSubmit={btnEnviar}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={handleChange}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};
export default formTarea