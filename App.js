import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function App() {
  //Need state for list of tasks
  const [taskList, setTaskList] = useState([]);
  //Need state for the current value of each text input
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  //Need a function to add a task to the task list
  const handleAdd = () => {
    setTaskList([...taskList, {title: titleInput, description: descriptionInput, date: dateInput}]);
    setTitleInput("")
    setDescriptionInput("")
    setDateInput("")
  };

  //This is a component that will be reused to represent each individual task.
  //What props does each task need?
  const TodoItem = ({ task }) => {
    //Need state to represent whether the task is checked off or not
    const [checkedOff, setCheckedOff] = useState(false);
    //Need a function to toggle whether the task is checked off or not
    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const handleDelete = () => {
      setTaskList(taskList.filter((i) => i !== task));
    };

    return (
      <div>
        {checkedOff && (
          <div style={{ border: "1px solid black", width: "300px", textAlign: "center", backgroundColor: "#DEB992" }}>
            <h2>
              <s>{task.title}</s>
            </h2>
          </div>
        )}
        {!checkedOff && (
          <div style={{ border: "1px solid black", width: "300px", textAlign: "center", backgroundColor: "#DEB992" }}>
            <h1>{task.title}</h1>
            <h4>{task.description}</h4>
            <h4>{task.date}</h4>
          </div>
        )}
        <button onClick={handleCheckOff}>Check off</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return (
    <div
      style={{display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>Task: </p>
      <input value = {titleInput} type="text" onChange={(e1) => setTitleInput(e1.target.value)} />
      <p>Descripton: </p>
      <input
        value = {descriptionInput}
        type="text"
        onChange={(e2) => setDescriptionInput(e2.target.value)}
      />
      <p>Due date: </p>
      <input  value = {dateInput} type="text" onChange={(e3) => setDateInput(e3.target.value)} />

      <button style = {{backgroundColor: "7D8E95", fontSize: "20px"}}
      onClick={handleAdd}>Add Todo Item</button>

      {taskList.map((task) => (
        <TodoItem task={task} />
      ))}
    </div>
  );
}
