import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatsStart } from "./store/catsSlice/catesSlice";

function App() {
  const dispatch = useDispatch();
  const catsData = useSelector((state) => state.cats.data);
  useEffect(() => {
    dispatch(fetchCatsStart());
  }, [dispatch]);

  console.log({ catsData });
  return (
    <div className="App">
      <h1>Hello world</h1>
      {catsData.map((comment) => (
        <div
          style={{ border: "1px solid", margin: "10px", padding: "10px" }}
          key={comment.id}
        >
          <h1>{comment.title}</h1>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
