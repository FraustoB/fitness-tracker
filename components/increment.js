import { useDispatch } from "react-redux";
import { increment, changeName } from "../slices/counterSlice.js";
export default function IncrementButton() {
  const dispatch = useDispatch();

  const controlOnClick = () => {
    dispatch(increment());
    dispatch(changeName());
  };
  return (
    <div>
      <button
        onClick={controlOnClick}
        type="button"
        className="btn btn-secondary"
      >
        Increment
      </button>
    </div>
  );
}
