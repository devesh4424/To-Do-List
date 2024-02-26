import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setfinish] = useState(true);

  const togglefinish = () => {
    setfinish(!showfinished);
  };

  const handlesave = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
  };
  const handleedit = (e, id) => {
    let edittodo = todos.filter((item) => item.id === id);
    setTodo(edittodo[0].todo);
    let t = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(t);
  };
  const handledelete = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newtodos);
  };
  const handlechange = (e) => {
    setTodo(e.target.value);
  };
  const handlecheckbox = (e, id) => {
    let index = todos.findIndex((item) => item.id === id);
    let newtodos = [...todos];
    newtodos[index].iscompleted = !newtodos[index].iscompleted;
    setTodos(newtodos);
  };
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto mx-9 my-5 rounded-xl bg-violet-200 mx-10 rounded-xl my-5 p-5 min-h-[80vh] md:w-2/5">
        <h1 className="font-bold text-center text-2xl">
          iTask - Manage your todos at one place
        </h1>
        <h2 className="text-xl my-4 font-bold">Add a Todo</h2>
        <div className="flex">
          <input
            className="rounded-full w-full py-1 px-3"
            onChange={handlechange}
            value={todo}
            type="text"
          />
          <button
            disabled={todo.length <= 3}
            onClick={handlesave}
            className="bg-violet-800 hover:bg-violet-950 disabled:bg-violet-400 text-white font bold py-2 px-5 rounded-full mx-6 text-sm"
          >
            Save
          </button>
        </div>
        <div>
          <input
            className="my-7"
            onChange={togglefinish}
            type="checkbox"
            checked={showfinished}
          />{" "}
          Show Finished
        </div>
        <div className="bg-slate-700 h-0.5 w-7/9 mx-auto"></div>
        <h2 className="text-xl font-bold my-4">Your Todos</h2>
        {todos.length == 0 && <div>No todos to display</div>}
        {todos.map((item) => {
          return (
            (showfinished || !item.iscompleted) && (
              <div key={item.id} className="w-full flex my-3 justify-between">
                <div className="flex gap-3 w-3/4">
                  <input
                    onChange={(e) => handlecheckbox(e, item.id)}
                    type="checkbox"
                  />
                  <div
                    className={
                      item.iscompleted ? "line-through text-wrap" : "text-wrap"
                    }
                  >
                    {item.todo}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={(e) => handleedit(e, item.id)}
                    className="bg-violet-800 hover:bg-violet-950 text-white font bold py-1 p-2 rounded-md mx-1 text-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handledelete(e, item.id)}
                    className="bg-violet-800 hover:bg-violet-950 text-white font bold py-1 p-2 rounded-md mx-1 text-sm"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default App;
