import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const formTarea = (props) => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const btnEnviar = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
  };
  return (
    <>
      <form onSubmit={btnEnviar}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>{" "}
      </form>
    </>
  );
};
export default formTarea