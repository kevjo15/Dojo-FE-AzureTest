import { useState } from "react";
import { Button } from "./components/common/Button/Button";
import { Users } from "./components/features/Users";
import Header from "./components/common/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow container mx-auto p-4 mt-20">
        <Users />
        <Button onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
      </main>
    </div>
  );
}

export default App;
