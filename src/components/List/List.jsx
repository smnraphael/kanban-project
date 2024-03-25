import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";
import useToDos from "../../context/useToDos";

const List = ({ statusType, setListEmpty, handleDeleteColumn }) => {
  const { toDos } = useToDos();
  const filteredToDos = toDos.filter((toDo) => toDo.status === statusType);

  if (filteredToDos.length === 0) {
    setListEmpty(true);
    return <button onClick={() => handleDeleteColumn()}>Delete Column</button>;
  }
  return (
    <div className="flex flex-col gap-2">
      {filteredToDos.map((toDo) => {
        return (
          <Link to={`/items/${toDo.id}`} key={toDo.id}>
            <ListItem key={toDo.id} toDo={toDo} />
          </Link>
        );
      })}
    </div>
  );
};

export default List;
