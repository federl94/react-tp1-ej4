import { ListGroup } from "react-bootstrap";
import Itemtarea from "./Itemtarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup> {tareas.map((tarea, index)=> (

      <Itemtarea key={index} tarea={tarea}></Itemtarea>
    ))}
    </ListGroup>
  );
};

export default ListaTareas;