import { React, useEffect, useState } from "react";
import "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");

  const submitInput = () => {
    if (input !== "" && desc !== "") {
      const todo = {
        id: Date.now(),
        name: input,
        description: desc,
      };
      setTodos((todos) => [...todos, todo]);
    }
  };
  const filterList = (id) => {
    //const todo = [...todos];
    //const filtered = todo.filter((item) => item.id !== id);
    setTodos((todos) => todos.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const todo = [
      {
        id: 1,
        name: "Viransh",
        description: "2nd year computer science student at McMaster University",
      },
      {
        id: 2,
        name: "Ujjwal",
        description: "2nd year computer science student at McMaster University",
      },
    ];
    setTodos(todo);
  }, []);

  return (
    <div>
      <h6>Name &emsp;&emsp; Description</h6>
      <input
        type="text"
        placeholder="Name Here"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description Here"
        value={desc}
        onInput={(e) => setDesc(e.target.value)}
      />
      <button onClick={submitInput} className="btn btn-primary">
        Add
      </button>
      <dl>
        <div class="row">
          <div class="column">Name</div>
          <div class="column">Description</div>
          <div class="column">Delete</div>
        </div>
        {todos.map((item) => (
          <dd key={item.id}>
            <div class="row list">
              <div class="column">{item.name}</div>
              <div class="column">{item.description}</div>
              <div class="column">
                <button
                  onClick={() => {
                    filterList(item.id);
                  }}
                >
                  ×
                </button>
              </div>
            </div>
          </dd>
        ))}
      </dl>
    </div>
  );
}

export default App;
