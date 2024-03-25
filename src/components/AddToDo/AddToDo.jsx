import React from "react";
import { useState } from "react";
import useToDos from "../../context/useToDos";

const AddToDo = ({ statusType }) => {
  const { addListItem } = useToDos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueBy, setDueBy] = useState("");
  const [priority, setPriority] = useState("");

  const handleTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleDescription = (e) => {
    setDescription(e.currentTarget.value);
  };

  const handleAssignee = (e) => {
    setAssignee(e.currentTarget.value);
  };

  const handleDueBy = (e) => {
    setDueBy(e.currentTarget.value);
  };

  const handlePriority = (e) => {
    setPriority(e.currentTarget.value);
  };

  // check if input is valid
  const [errorMessage, setErrorMessage] = useState("");

  const validInput = () => {
    if (!title || !description || !assignee || !dueBy || !priority) {
      return false;
    }
    return true;
  };

  // function to handle form behaviour
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validInput()) {
      setErrorMessage("Please input all fields");
      return;
    }

    setErrorMessage("");
    const newToDo = {
      id: crypto.randomUUID(),
      title,
      description,
      assignee,
      status,
      priority,
      dueBy,
    };
    addListItem(newToDo);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-2 rounded bg-blue-200"
    >
      <label htmlFor="task">Task</label>
      <input type="text" id="title" value={title} onChange={handleTitle} />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={handleDescription}
      />
      <label htmlFor="assignee">Assignee</label>
      <input
        type="text"
        id="assignee"
        value={assignee}
        onChange={handleAssignee}
      />
      <p>Status : {statusType}</p>
      <p>Created on {new Date().toISOString().split("T")[0]}</p>
      <label htmlFor="dueBy">Due by</label>
      <input
        type="date"
        id="dueBy"
        min={new Date().toISOString().split("T")[0]}
        value={dueBy}
        onChange={handleDueBy}
      />
      <label htmlFor="priority">Priority</label>
      <select
        name="priority"
        id="priority"
        value={priority}
        onChange={handlePriority}
      >
        <option value="" disabled>
          Select a priority
        </option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button className="bg-blue-500 rounded h-10">Add</button>
      <p>{errorMessage}</p>
    </form>
  );
};

export default AddToDo;
