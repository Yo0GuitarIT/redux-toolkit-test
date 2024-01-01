import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { Button } from "@material-tailwind/react";
 

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div >
      <div className="text-center">{count}</div>
      <div className="flex gap-3 justify-center">
        <Button
          className="text-teal-400"
          variant="outlined"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <Button
          className="text-red-400"
          variant="outlined"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
