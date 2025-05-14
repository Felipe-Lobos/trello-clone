import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Board from "./components/Board";

function App(){
  const handleDragEnd = result => {
    // Aquí debes despachar una acción para actualizar posiciones en el backend
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Board/>
    </DragDropContext>
  )
}

export default App;