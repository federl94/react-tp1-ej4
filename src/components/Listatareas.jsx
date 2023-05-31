import { ListGroup } from "react-bootstrap";
import Itemtarea from "./Itemtarea";

const ListaTareas = ({tareas, borrarTarea}) => {
  return (
    <ListGroup> {tareas.map((tarea, indiceTarea)=> (

      <Itemtarea key={indiceTarea} tarea={tarea} borrarTarea={borrarTarea}></Itemtarea>
    ))}
    </ListGroup>
  );
};

export default ListaTareas;