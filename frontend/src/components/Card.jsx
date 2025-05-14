import React from "react";
import { Draggable } from "@hello-pangea/dnd";

export default function Card({ list, index }) {
  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-2 rounded mb-2 shadow"
        >
          {list.content}
        </div>
      )}
    </Draggable>
  );
}
