import { Provider, useDispatch } from "react-redux";
import { sliceActionsAll } from "../redux/slice/actions";
import store from "../redux/store";

const ThunkTest = (props) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(sliceActionsAll.myThunk())}>Action</button>
  );
};

const Page = (props) => {
  return (
    <Provider store={store}>
      Hello World
      <ThunkTest />
    </Provider>
  );
};

export default Page;
