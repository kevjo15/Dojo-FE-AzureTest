import { useState } from "react";
import { Button } from "./components/common/Button/Button";
import { Users } from "./components/features/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Users />
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  );
}

export default App;
