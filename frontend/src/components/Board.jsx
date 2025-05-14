import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchBoards } from '../redux/slices/boardsSlice';
import List from "./List";

export default function Board(){
    const dispatch = useDispatch();
    const boards = useSelector(state => state.boards.items);

    useEffect(()=>{dispatch(fetchBoards())},[dispatch])

    return (
        <div className="flex space-x-4 overflow-auto">
            {boards.map(board => (
                <List key={board.id} board={board}/>
            ))}
        </div>
    )
}