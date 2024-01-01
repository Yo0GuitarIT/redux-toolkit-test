import { Counter } from "./features/counter/Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{count}</h1>
      <div className="card">
        <Counter />
      </div>
    </>
  );
}

export default App;
