import React from "react";
import Card from "./Card";
import { Droppable } from "@hello-pangea/dnd";

export default function List({board}){
    return (
        <Droppable
            droppableId={String(board.id)}
        >
            {(provided)=>(
                <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 p-4 rounded-lg w-80"
                >
                    <h2 className="font-bold mb-2">{board.name}</h2>
                    {board.lists.map((list,index)=>(
                        <Card key={list.id} list={list} index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}