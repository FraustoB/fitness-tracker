import IncrementButton from "../components/increment.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../slices/counterSlice.js";

export default function Home() {
  // const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <>
      <div>hello World</div>

      <button type="button" className="btn btn-primary">
        Primary
      </button>

      <IncrementButton />

      {/* <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(increment())}
      >
        increment
      </button> */}
    </>
  );
}
