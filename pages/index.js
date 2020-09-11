import { updateExampleData } from "../lib/redux/slices/exampleSlice";
import { useDispatch } from "react-redux";

const IndexPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Next.js ReduxToolkit Saga Apollo Boilerplate</h1>
      <button onClick={() => dispatch(updateExampleData("Changed Data"))}>
        dispatch
      </button>
    </>
  );
};

export default IndexPage;
