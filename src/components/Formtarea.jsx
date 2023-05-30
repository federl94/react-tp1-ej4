import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ListaTareas from "./Listatareas";


const formTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const btnEnviar = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  }
  const handleChange = (e) => {
    setTarea(e.target.value);
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
      <ListaTareas tareas={tareas}></ListaTareas>
    </>
  );
};
export default formTarea