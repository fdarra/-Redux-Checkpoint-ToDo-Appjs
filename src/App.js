import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" container  justify-center bg-slate-300 h-screen   ">
      <section>
        <h2 className="text-center"> App-Todo</h2>
      </section>
<div className="m-4 border-3 border-slate-950 rounded-2xl p-4 ">

<div className=" ">
        <AddTask />
        <TodoList />
      </div>

</div>
      
    </div>
  );
}

export default App;
